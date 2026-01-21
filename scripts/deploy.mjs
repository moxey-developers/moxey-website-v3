import { BlobServiceClient } from "@azure/storage-blob";
import { existsSync, readdirSync, statSync } from "fs";
import { resolve, relative, sep, join, dirname } from "path";
import { lookup } from "mime-types";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = "$web";
const localPath = resolve(__dirname, "../out");

if (!connectionString) {
  console.error(
    "Error: AZURE_STORAGE_CONNECTION_STRING is not defined in .env"
  );
  process.exit(1);
}

const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

const MAX_RETRIES = 3;

async function uploadWithRetry(blockBlobClient, file, contentType) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      await blockBlobClient.uploadFile(file, {
        blobHTTPHeaders: { blobContentType: contentType },
      });
      return; // Success
    } catch (error) {
      console.warn(
        `Attempt ${attempt} failed for ${blockBlobClient.name}: ${error.message}`
      );
      if (attempt === MAX_RETRIES) throw error;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

async function uploadDirectory(directoryPath) {
  console.log(`Starting upload from ${directoryPath}...`);
  if (!existsSync(directoryPath)) {
    console.error(
      `Error: Directory ${directoryPath} does not exist. Run 'npm run build' first.`
    );
    process.exit(1);
  }

  const files = getAllFiles(directoryPath);
  console.log(`Found ${files.length} files to upload.`);

  const uploadErrors = [];

  // Separate entry points (index.html/txt) to upload them last
  // This helps minimize the window where a user might hit a new index but old assets aren't there yet (though hash versioning mostly solves this)
  const entryPoints = files.filter(
    (f) => f.endsWith("index.html") || f.endsWith("index.txt")
  );
  const otherFiles = files.filter((f) => !entryPoints.includes(f));
  const orderedFiles = [...otherFiles, ...entryPoints];

  for (const file of orderedFiles) {
    const relativePath = relative(directoryPath, file);
    // Replace backslashes with forward slashes for Azure Blob Storage paths (important on Windows)
    const blobName = relativePath.split(sep).join("/");
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const contentType = lookup(file) || "application/octet-stream";

    console.log(`Uploading ${blobName} (${contentType})...`);

    try {
      await uploadWithRetry(blockBlobClient, file, contentType);
    } catch (error) {
      console.error(`FAILED to upload ${blobName}:`, error.message);
      uploadErrors.push({ file: blobName, error: error.message });
    }
  }

  if (uploadErrors.length > 0) {
    console.error("Deployment failed with errors:", uploadErrors);
    process.exit(1);
  }

  console.log("Upload complete!");
}

function getAllFiles(dirPath, arrayOfFiles) {
  const files = readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (statSync(join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

uploadDirectory(localPath).catch((err) => {
  console.error("Deployment failed:", err);
  process.exit(1);
});

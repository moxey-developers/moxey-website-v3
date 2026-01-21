"use client";

import { socialMedia } from "@/lib";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="overflow-hidden bg-black min-h-[80vh] h-full w-full relative bg-grid-footer flex items-center justify-center">
      {/* footer content */}
      <div className="text-white py-10 flex flex-col justify-between md:flex-row items-center md:items-stretch h-full md:h-[75%] max-w-[1200px] px-10">
        {/* footer left section */}
        <div className="flex flex-col justify-between text-center mb-3 md:mb-0 md:text-left md:w-[50%] md:space-y-5">
          <div className="space-y-7 flex flex-col items-center md:block">
            <Image
              src="/moxey-light.png"
              alt="moxey-light-logo-grid"
              width="100"
              height="100"
              loading="lazy"
              className="h-7 w-36 md:h-[38px] md:w-[195px]"
            />
            <p className="text-center text-sm md:text-base md:text-justify md:px-0">
              MOXEY is democratizing access to digital payment channels for
              businesses, empowering them with modern financial tools that
              streamline daily operations and encourage growth while boosting
              financial inclusion for the underserved and unbanked.
            </p>
            <h5 className="font-bold italic text-3xl md:text-4xl">
              Beyond Payments
            </h5>
          </div>

          {/* pci >=md */}
          <div className="space-y-3 hidden md:block">
            <Image
              src="/pci-logo.png"
              width="100"
              height="100"
              loading="lazy"
              alt="pci-logo"
            />
            <p>Copyright © 2022 MoXey. All rights reserved.</p>
            <p>
              The MoXey Tech Limited card is issued by Arab Bank, pursuant to
              license by Visa. Visa is a registered trademark of Visa Inc
            </p>
          </div>
        </div>

        {/* footer right section */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col-reverse gap-y-8 md:gap-y-20 md:flex-col">
            {/* social links */}
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex items-center gap-3">
                {socialMedia.slice(0, 4).map((item) => (
                  <Image
                    key={item}
                    src={`/${item}.png`}
                    alt={`${item}-logo`}
                    width="100"
                    height="100"
                    loading="lazy"
                    className="h-9 w-9 md:h-10 md:w-10"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialMedia.slice(4).map((item) => (
                  <Image
                    key={item}
                    src={`/${item}.png`}
                    alt={`${item}-logo`}
                    width="100"
                    height="100"
                    loading="lazy"
                    className="h-9 w-9 md:h-10 md:w-10"
                  />
                ))}
              </div>
            </div>

            {/* site links */}
            <div className="flex flex-col items-center gap-2 font-medium text-sm md:text-base">
              <div className="flex items-center gap-3">
                <a href="/privacy-policy" className="border-r-2 pr-2">
                  Privacy Policy
                </a>
                <a href="/faq" className="border-r-2 pr-2">
                  FAQ
                </a>
                <a href="/terms-of-use">Terms of use</a>
              </div>
              <div className="flex items-center gap-3">
                <a href="/copyright-policy" className="border-r-2 pr-2">
                  Copyright Policy
                </a>
                <a href="/data-policy">Data Policy</a>
              </div>
            </div>
          </div>

          {/* app store links */}
          <div className="py-5 md:py-0">
            <p className="text-center">Get it on</p>
            <div className="flex items-center justify-center gap-x-3 gap-y-3 md:gap-y-0 mt-2">
              <Image
                src="/appstore.png"
                alt="appstore-logo"
                width="100"
                height="100"
                loading="lazy"
                className="h-[40px] w-[138px] md:h-[52px] md:w-[180px]"
              />
              <Image
                src="/playstore.png"
                alt="playstore-logo"
                width="100"
                height="100"
                loading="lazy"
                className="h-[40px] w-[138px] md:h-[52px] md:w-[180px]"
              />
            </div>
          </div>

          {/* pci */}
          <div className="space-y-3 flex flex-col items-center text-center text-sm py-5 md:mt-0 md:text-base md:hidden">
            <Image
              src="/pci-logo.png"
              width="100"
              height="100"
              loading="lazy"
              alt="pci-logo"
              className="h-10 w-[100px]"
            />
            <p>Copyright © 2022 MoXey. All rights reserved.</p>
            <p>
              The MoXey Tech Limited card is issued by Arab Bank, pursuant to
              license by Visa. Visa is a registered trademark of Visa Inc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

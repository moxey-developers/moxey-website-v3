import GradientButton from "../ui/GradientButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/text-area";

const CompanyForm = () => {
  return (
    <div className="m-6 font-inter">
      <div className="md:grid md:grid-cols-2 gap-3 space-y-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            placeholder="Enter first name"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="Enter last name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Email ID</Label>
          <Input id="email" placeholder="Enter email" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input id="jobTitle" placeholder="Enter job title" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            placeholder="Enter company name"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="businessType">Business Type</Label>
          <Input
            id="businessType"
            placeholder="Enter company name"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="companySize">Company Size</Label>
          <Input
            id="companySize"
            placeholder="Enter company name"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="interestedProducts">Interested Products</Label>
          <Input
            id="interestedProducts"
            placeholder="Enter company name"
            className="mt-1"
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="whatWeHelp">What can we help you with?</Label>
          <Textarea
            id="whatWeHelp"
            placeholder="Placeholder text"
            className="mt-1"
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="howHearAboutUs">How did you hear about us</Label>
          <Input
            id="howHearAboutUs"
            placeholder="Placeholder text"
            className="mt-1"
          />
        </div>
      </div>
      <div className="my-5 flex items-start justify-start">
        <GradientButton>Submit</GradientButton>
      </div>
    </div>
  );
};

export default CompanyForm;

import {
  ChartSplineIcon,
  CreditCardIcon,
  ReceiptText,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GradientButton } from "@/components";

const content = [
  {
    icon: (props) => <Smartphone {...props} />,
    title: "Download the MoXey Pay app",
    desc: "All services accessible digitally through the app",
  },
  {
    icon: (props) => <CreditCardIcon {...props} />,
    title: "Link your Prepaid card",
    desc: "Create your profile and link your card instantly  via the digital app",
  },
  {
    icon: (props) => <ChartSplineIcon {...props} />,
    title: "Monitor funds in real-time",
    desc: "Track balance and subscribe to value-added services",
  },
  {
    icon: (props) => <ReceiptText {...props} />,
    title: "Shop, pay bills or remit funds",
    desc: "Shop with a prepaid card or use our app for remittance and bill payments",
  },
];

const SectionFifth = () => {
  return (
    <div className="font-inter relative flex flex-col justify-stretch items-center bg-white px-5 md:px-10">
      {/* Blending Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-mx-gray via-mx-gray/10 to-transparent"></div>

      <div className="absolute top-12 h-[0.02rem] w-full bg-gray-300"></div>
      {/* <div className="absolute bottom-12 h-[0.02rem] w-full bg-gray-300"></div> */}

      <div className="border border-t-0 border-b-0 border-gray-300 h-full w-full max-w-[1100px] flex flex-col items-center pt-30 pb-28 text-center relative">
        {/* Heading */}
        <div className="mb-5 flex flex-col items-center space-y-5">
          <GradientButton
            variant="secondary"
            className="rounded-full cursor-default text-sm md:text-base"
          >
            <CreditCardIcon className="w-4 h-4 me-2" />
            Digital Payments Made Easy
          </GradientButton>
          <h2 className="text-xl px-5 md:px-0 md:text-4xl text-gray-900 font-semibold">
            Seamless Transactions Anytime, Anywhere
          </h2>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-14">
          {content.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "text-left bg-gray-50/50 py-12 px-8 md:px-12 border border-gray-300 space-y-5",
                i === 0 &&
                  "border-l md:border-l-0 border-r md:border-r-0 border-b-0",
                i === 1 && "border-r md:border-r-0 border-b-0",
                i === 2 && "border-l md:border-l-0 border-r md:border-r-0",
                i === 3 && "border-r md:border-r-0 border-t-0 md:border-t",
              )}
            >
              <GradientButton className="custom-cursor">
                <item.icon className="w-4 h-4" />
              </GradientButton>
              <div className="space-y-1">
                <p className="text-base md:text-xl font-semibold">
                  {item.title}
                </p>
                <p className="text-sm md:text-base text-gray-800">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blending Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-mx-gray via-mx-gray/90 to-transparent"></div>
    </div>
  );
};

export default SectionFifth;

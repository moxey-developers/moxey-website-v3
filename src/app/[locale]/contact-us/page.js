"use client";

import { GradientButton } from "@/components";
import CompanyForm from "@/components/contactuspage/company-form";
import IndividualForm from "@/components/contactuspage/individual-form";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  Headphones,
  Laptop,
  MessageCircleMoreIcon,
  MouseIcon,
  MoveLeft,
  MoveRight,
  Newspaper,
  Phone,
  Timer,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const whyMoxey = [
    {
      Icon: (props) => <Timer {...props} />,
      label: "Real-Time Transaction Tracking",
      content:
        "MoXey provides instant insights into fleet-related payments, allowing you to monitor expenses, fuel usage, and driver transactions in real-time, enhancing overall transparency.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Streamlined Cash Flow",
      content:
        "With features like invoice factoring and supply chain financing, MoXey converts pending invoices into cash, ensuring smooth operations without cash flow disruptions.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Customizable Spending Controls",
      content:
        "Set spending limits, prevent unauthorized usage, and monitor driver and vendor payments, ensuring full control over your fleet's financial management.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Integrated Digital Solutions",
      content:
        "MoXey integrates seamlessly with accounting systems, automating processes like invoicing, collections, and payments, making the transition to paperless and digital financial operations smooth and Efficient.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Flexible Financing Options",
      content:
        "With solutions like leasing, SCF, and BNPL, MoXey offers financial flexibility to businesses, helping them manage operational costs and scale more easily​",
    },
  ];

  const cards = [
    {
      Icon: (props) => <Headphones {...props} />,
      label: "Help & Support",
      content: "Submit a request to get help from our friendly support experts",
      action: "View FAQs",
    },
    {
      Icon: (props) => <Newspaper {...props} />,
      label: "Blogs",
      content: "Submit a request to get help from our friendly support experts",
      action: "View Blogs",
    },
    {
      Icon: (props) => <Laptop {...props} />,
      label: "Book a Demo",
      content: "Submit a request to get help from our friendly support experts",
      action: "Book Now",
    },
  ];

  return (
    <section className="relative min-h-screen h-full bg-mx-gray overflow-hidden pb-16 md:pb-36 font-inter pt-10 md:pt-16">
      <div className="max-w-[75rem] mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Contact Us
          </h1>
          <p className="md:text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="border border-gray-300 rounded-sm bg-white w-full max-w-[800px] mt-8">
          <div className="flex items-center flex-col md:flex-row justify-between md:max-w-[55%] mx-auto md:bg-gray-50 rounded-sm py-3 px-5 mt-5">
            <GradientButton
              variant={currentTab === 1 ? "default" : "secondary"}
              className="w-full md:w-auto"
              onClick={() => setCurrentTab(1)}
            >
              For Individual
            </GradientButton>
            <div className="flex items-center flex-col md:flex-row justify-between text-gray-800">
              <MoveLeft className="w-4 h-4" />
              <MouseIcon className="w-4 h-4 md:w-6 md:h-6" />
              <MoveRight className="w-4 h-4" />
            </div>
            <GradientButton
              variant={currentTab === 2 ? "default" : "secondary"}
              className="w-full md:w-auto"
              onClick={() => setCurrentTab(2)}
            >
              For Company
            </GradientButton>
          </div>

          {/* Form */}
          {currentTab === 1 && <IndividualForm />}
          {currentTab === 2 && <CompanyForm />}
        </div>

        {/* Why should you choose Moxey */}
        <div className="w-full mt-30">
          <h2 className="capitalize text-center text-3xl md:text-4xl leading-tight font-semibold text-gray-800">
            why should <br /> you choose MoXey.
          </h2>

          <div className="md:grid md:grid-cols-2 mt-14">
            {whyMoxey.map((item, i) => (
              <div
                className={cn(
                  "border border-gray-300 p-5 md:p-10 space-y-4",
                  i === whyMoxey.length - 1 && "col-span-2",
                  i === 0 && "border-b-0 md:border-r-0",
                  i === 1 && "border-b-0",
                  i === 2 && "border-b-0 md:border-r-0",
                  i === 3 && "border-b-0",
                )}
                key={item.label}
              >
                <GradientButton>
                  <item.Icon className="w-4 h-4" />
                </GradientButton>
                <div className="space-y-2">
                  <p className="text-lg md:text-xl text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-gray-800">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="w-full mt-30 space-y-9">
          <div className="h-full min-h-[300px] bg-blue-950 border border-gray-300 flex items-center flex-col-reverse md:flex-row">
            <div className="p-5 space-y-3 text-gray-100 w-full md:w-[70%]">
              <p className="text-mx-green font-semibold text-2xl">
                United Arab Emirates
              </p>
              <p>
                Office 1702 to 1705 Fortune Executive, <br /> Cluster T JLT,
                Dubai, UAE
              </p>
              <div className="space-y-1">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 me-2" />
                  Contact Number - +971 600533355
                </p>
                <p className="flex items-center">
                  <MessageCircleMoreIcon className="w-4 h-4 me-2" />
                  Whatsapp - +971 522774554
                </p>
              </div>
              <a
                href="/"
                className="mt-5 flex items-center hover:underline underline-offset-4"
              >
                Open in Google map <ArrowUpRight className="ms-1 w-4 h-4" />
              </a>
            </div>
            <div className="w-full min-h-full md:h-[400px] overflow-hidden">
              <Image
                src="/uae-map.png"
                alt="uae-location"
                height={500}
                width={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="min-h-[300px] bg-blue-950 border border-gray-300 flex items-center flex-col-reverse md:flex-row">
            <div className="space-y-3 p-5 text-gray-100 w-full md:w-[70%]">
              <p className="text-mx-green font-semibold text-2xl">
                Saudi Arabia
              </p>
              <p>
                PO. Box 12385, 7335, Prince Turki Ibn Abdulaziz, <br /> Al Awwal
                Road, Al Nakheel District, Riyadh, Kingdom of Saudi Arabia
              </p>
              <div className="space-y-1">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 me-2" />
                  Contact Number - +971 600533355
                </p>
                <p className="flex items-center">
                  <MessageCircleMoreIcon className="w-4 h-4 me-2" />
                  Whatsapp - +966 593238826
                </p>
              </div>
              <a
                href="/"
                className="mt-5 flex items-center hover:underline underline-offset-4"
              >
                Open in Google map <ArrowUpRight className="ms-1 w-4 h-4" />
              </a>
            </div>
            <div className="w-full min-h-full md:h-[400px] overflow-hidden">
              <Image
                src="/saudi-map.png"
                alt="saudi-location"
                height={500}
                width={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Supports & Blog & Demo */}
        <div className="flex items-center flex-col gap-3 md:flex-row w-full max-w-[1100px] mt-30 text-gray-800">
          {cards.map((item) => (
            <div className="border border-gray-300 p-4 space-y-3">
              <item.Icon className="w-8 h-8" />
              <div className="space-y-2">
                <p className="text-lg md:text-xl">{item.label}</p>
                <p>{item.content}</p>
                <a className="flex items-center text-mx-green hover:underline underline-mx-green">
                  {item.action} <ArrowRight className="w-4 h-4 ms-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

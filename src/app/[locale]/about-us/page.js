"use client";
import GradientButton from "@/components/ui/GradientButton";
import { cn } from "@/lib/utils";
import { Timer } from "lucide-react";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const count = useMotionValue(0); // Starts from 0
  const springValue = useSpring(count, { stiffness: 100, damping: 15 }); // Smooth animation
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest),
  ); // Round values

  useEffect(() => {
    if (inView) {
      count.set(value); // Animate to final value
    }
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
    </span>
  );
};

const AboutUs = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animations for fluid movement
  const smoothX = useSpring(x, { stiffness: 100, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 15 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    x.set(clientX - window.innerWidth / 2);
    y.set(clientY - window.innerHeight / 2);
  };

  const whyMoxey = [
    {
      Icon: (props) => <Timer {...props} />,
      label: "Innovation",
      content:
        "We embrace change and constantly seek to improve our solutions, delivering cutting-edge financial tools that meet the evolving needs of fleet owners and operators.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Customer-Centricity",
      content:
        "Everything we design and develop revolves around the needs of our customers. We listen, adapt, and offer customized financial solutions that ensure operational success and satisfaction.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Transparency",
      content:
        "Honesty and openness are at the core of MoXey. Our solutions provide clear, real-time financial data, empowering customers with full visibility and control over their operations.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Reliability",
      content:
        "Fleet owners can count on us to deliver seamless and secure services. From payments to financing, we ensure that every transaction and interaction is handled with the utmost care.",
    },
    {
      Icon: (props) => <Timer {...props} />,
      label: "Collaboration",
      content:
        "We believe in working closely with our customers, partners, and stakeholders to co-create solutions that drive success. Together, we solve challenges and create long-term value for all parties involved.",
    },
  ];

  return (
    <section className="relative min-h-screen h-full flex flex-col items-center justify-start bg-mx-gray overflow-hidden pb-16 md:pb-36 font-inter pt-10 md:pt-16">
      {/* Background */}
      <div className="aboutus-bg h-[400px] w-full absolute -top-4 opacity-15">
        {/* Blending Gradient Effect */}
        <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-mx-gray via-mx-gray/90 to-transparent"></div>
      </div>

      <div className="max-w-[75rem] mx-auto px-4 md:px-6 z-10 flex flex-col items-center relative">
        {/* Header */}
        <section className="flex flex-col items-center space-y-5  w-full max-w-[800px] z-10">
          <div className="space-y-2">
            <div className="relative bg-white p-5 rounded-3xl border border-gray-300 shadow-[inset_0_4px_8px_rgba(0,0,0,0.15),_inset_0_-4px_8px_rgba(0,0,0,0.05)] after:absolute after:inset-[-6px] after:rounded-3xl after:bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.05),_transparent)]">
              <Image
                src="/moxey-x.png"
                width={42}
                height={42}
                alt="moxey-x-logo"
              />
            </div>
          </div>

          <div className="text-2xl md:text-4xl font-semibold text-gray-700 text-center space-y-2">
            <h1>
              Powering the Future of <br /> Fleet Management
            </h1>
          </div>

          <div className="text-gray-800 flex flex-col items-center space-y-6">
            <p className="text-lg md:text-2xl text-center">
              MoXey is a fintech innovator, offering solutions that simplify
              financial management for fleet owners and transporters
            </p>

            <GradientButton>Download Our Protfolio</GradientButton>

            {/* Fixed Image Container */}
            <div
              className={cn(
                "relative w-full h-full justify-self-end bg-gray-100 p-2 rounded-md md:shadow-lg md:drop-shadow-2xl hover:scale-[105%] transition-transform duration-300 ease-in-out mt-5 md:mt-10",
              )}
            >
              <Image
                src="/app-dashboard.jpg"
                alt="App Dashboard"
                width={1200}
                height={800}
                priority
                className="rounded-md"
              />
            </div>
          </div>
        </section>

        {/* AED */}
        <div className="grid grid-col-1 md:grid-cols-4 pt-20 md:pt-30 w-full md:max-w-full gap-5">
          <div className="border border-gray-300 rounded-sm p-5 bg-white">
            <p className="text-2xl text-mx-green font-medium">
              AED <AnimatedNumber value={150} />
              B+
            </p>
            <p className="text-gray-700">Payment Secured</p>
          </div>
          <div className="border border-gray-300 rounded-sm p-5 bg-white">
            <p className="text-2xl text-mx-green font-medium">
              AED <AnimatedNumber value={150} />B
            </p>
            <p className="text-gray-700">Fraud attempts stopped</p>
          </div>
          <div className="border border-gray-300 rounded-sm p-5 bg-white">
            <p className="text-2xl text-mx-green font-medium">
              <AnimatedNumber value={150} />
            </p>
            <p className="text-gray-700">Available Countries</p>
          </div>
          <div className="border border-gray-300 rounded-sm p-5 bg-white">
            <p className="text-2xl text-mx-green font-medium">
              <AnimatedNumber value={150} />+
            </p>
            <p className="text-gray-700">Supported Business</p>
          </div>
        </div>

        {/* Our Values */}
        <section className="flex flex-col pt-20 md:pt-30">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
              Our Core Values
            </h2>
            <p className="md:w-[80%] mx-auto">
              At MoXey, our values guide everything we do, from developing
              innovative financial solutions to building strong relationships
              with our customers. We are driven by a commitment to excellence
              and dedicated to helping businesses succeed.
            </p>
          </div>

          {/* Section Content */}
          <div className="overflow-hidden h-full relative mt-5">
            <div className="md:grid md:grid-cols-2 mt-10">
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
        </section>

        {/* Collaboration */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-20 md:pt-30">
          <div className="space-y-3 md:w-[55%] text-center md:text-left">
            <p className="text-2xl md:text-4xl font-medium text-gray-800">
              Driving Fintech <br /> with Trust & Innovation
            </p>
            <p className="text-lg text-gray-700">
              We collaborate with Arab Bank for seamless banking, ensure
              top-tier security with PCI DSS compliance, and are trusted by Visa
              for reliable transactions.
            </p>
          </div>
          <div
            className="mt-6 md:mt-0 relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            {isMouseOver && (
              <motion.div
                className="absolute top-[50%] -left-[30%] -translate-y-[50%] w-[50px] h-[50px] bg-mx-green blur-2xl rounded-full pointer-events-none -z-10"
                style={{
                  x: smoothX,
                  y: smoothY,
                }}
              />
            )}
            <Image
              src="/about-us-partner.png"
              width={400}
              height={400}
              alt="moxey-x-logo"
              className="z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

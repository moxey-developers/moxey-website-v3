import Image from "next/image";

const SectionFourth = () => {
  return (
    <section className="font-inter relative min-h-[80vh] h-full flex flex-col justify-stretch items-center bg-mx-gray px-5 md:px-10">
      <div className="h-full w-full max-w-[1150px] flex flex-col items-center pt-20 pb-14 text-center">
        {/* Heading */}
        <div className="mb-20 flex flex-col items-center space-y-5">
          {/* <GradientButton
            variant="secondary"
            className="rounded-full cursor-default text-sm md:text-base"
          >
            <Box className="w-4 h-4 me-2" />
            Our Products
          </GradientButton> */}
          <div className="space-y-3">
            <h2 className="text-xl px-5 md:px-0 md:text-4xl text-gray-900 font-semibold">
              We are committed to serving all our stakeholders
            </h2>
          </div>
        </div>
        {/* content */}
        <div className="w-full h-full border border-gray-300 rounded-sm relative px-5 md:px-10 py-12 md:py-20">
          <div className="absolute top-2 left-2 opacity-80">
            <Image src="/screw.png" width="20" height="40" alt="screw" />
          </div>
          <div className="absolute top-2 right-2 opacity-80">
            <Image src="/screw.png" width="20" height="40" alt="screw" />
          </div>
          <div className="absolute bottom-2 left-2 opacity-80">
            <Image src="/screw.png" width="20" height="40" alt="screw" />
          </div>
          <div className="absolute bottom-2 right-2 opacity-80">
            <Image src="/screw.png" width="20" height="40" alt="screw" />
          </div>

          <div className="text-left flex flex-col-reverse md:flex-row gap-5">
            <div className="flex-1 space-y-3 md:space-y-5">
              <p className="text-2xl md:text-4xl font-medium">
                Meet all your Fintech requirements
              </p>
              <p className="text-gray-800">
                Whether you're a transporter, retail merchant, or logistics
                manager, MoXey provides you with one platform for all your
                fintech needs.
              </p>
              <ul className="space-y-2 text-gray-800 list-disc px-5">
                <li>Easy and instant payments </li>
                <li>Top success rate</li>
                <li>Instant settlements</li>
                <li>Real-time reporting and insights</li>
                <li>Frictionless customer experience</li>
              </ul>
            </div>

            <div className="w-full md:w-[50%] h-[300px] md:h-[350px] bg-white rounded-md border-gray-400 shadow-md">
              image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFourth;

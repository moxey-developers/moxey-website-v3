import HeroSection from "./sections/hero-section";
import MoxeyProductSection from "./sections/moxey-product-section";
import ReviewSection from "./sections/review-section";
import SectionFifth from "./sections/section-fifth";
import SectionFourth from "./sections/section-fourth";
import WhatWeServeSection from "./sections/what-we-serve-section";

export default function HomePage({ locale }) {
  return (
    <>
      {/* Section One */}
      <HeroSection />
      {/* Section Two */}
      <WhatWeServeSection />
      {/* Section Third */}
      <MoxeyProductSection />
      {/* Section Fourth */}
      <SectionFourth />
      {/* Section Fifth */}
      <SectionFifth />
      {/* Section Sixth */}
      <ReviewSection />
    </>
  );
}

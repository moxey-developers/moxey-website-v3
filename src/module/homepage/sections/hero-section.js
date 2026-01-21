"use client";

import { useState } from "react";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { GradientButton } from "@/components";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const [isMouseCursorEnter, setIsMouseCursorEnter] = useState(false);
  const t = useTranslations("HomePage");

  // const [isMouseOver, setIsMouseOver] = useState(false);
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // // Smooth spring animations for fluid movement
  // const smoothX = useSpring(x, { stiffness: 100, damping: 15 });
  // const smoothY = useSpring(y, { stiffness: 100, damping: 15 });

  // const blurEffect = useTransform(
  //   [smoothX, smoothY],
  //   ([latestX, latestY]) =>
  //     `drop-shadow(0px 0px 50px rgba(34, 180, 112, 0.4)) translate(${latestX}px, ${latestY}px)`
  // );

  // const handleMouseMove = (event) => {
  //   const { clientX, clientY } = event;
  //   x.set(clientX - window.innerWidth / 2);
  //   y.set(clientY - window.innerHeight / 2);
  // };

  return (
    <section
      className="relative hero-grid min-h-[95vh] h-full flex flex-col items-center justify-center bg-mx-gray overflow-hidden pb-16 md:pb-36"
      // onMouseMove={handleMouseMove}
      // onMouseEnter={() => setIsMouseOver(true)}
      // onMouseLeave={() => setIsMouseOver(false)}
    >
      {/* Blurred Shadow Follows Cursor */}
      {/* {isMouseOver && (
        <motion.div
          className="absolute w-[150px] h-[150px] bg-mx-green/70 blur-3xl rounded-full pointer-events-none"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        />
      )} */}

      <div className="text-center space-y-7 flex flex-col items-center justify-center max-w-[90%] h-92 md:h-120">
        <h1 className="font-playfair text-4xl md:text-6xl font-semibold capitalize">
          {t("HeroSection.title.t1")}{" "}
          <span className="text-mx-green">{t("HeroSection.title.t2")}</span>{" "}
          {t("HeroSection.title.t3")} <br className="hidden md:inline-block" />{" "}
          {t("HeroSection.title.t4")}
        </h1>
        <p className="font-inter text-sm md:text-lg w-full max-w-140 mx-auto">
          {t("HeroSection.titleDescription")}
        </p>
        <GradientButton size="lg">
          {t("HeroSection.actionBtn")} <ArrowUpRight className="ms-1" />
        </GradientButton>
      </div>

      {/* Fixed Image Container */}
      <motion.div
        onMouseEnter={() => setIsMouseCursorEnter(true)}
        onMouseLeave={() => setIsMouseCursorEnter(false)}
        className={cn(
          "relative max-w-225 h-full justify-self-end bg-gray-100 p-2 rounded-md md:shadow-lg md:drop-shadow-2xl hover:scale-[105%] transition-transform duration-300 ease-in-out"
          //   isMouseCursorEnter && "custom-cursor"
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
      </motion.div>

      {/* Blending Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-mx-gray via-mx-gray/90 to-transparent"></div>
    </section>
  );
};

export default HeroSection;

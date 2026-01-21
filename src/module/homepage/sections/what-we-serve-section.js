"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Target } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { GradientButton } from "@/components";

const MAX_WORDS = 50; // Arbitrary large number to ensure stability

const WhatWeServeSection = () => {
  const ref = useRef(null);
  const t = useTranslations("HomePage");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const text = t("SectionTwo.content");

  const words = text.split(" ");

  const opacityHooks = Array.from({ length: MAX_WORDS }).map((_, index) => {
    const start = index / MAX_WORDS / 2;
    const end = start + 0.2;
    return useTransform(scrollYProgress, [start, end], [0.25, 1]);
  });

  return (
    <section
      ref={ref}
      className="h-[66vh] md:h-[85vh] flex flex-col justify-center items-center bg-mx-gray px-5 md:px-10"
    >
      <div className="mb-10">
        <GradientButton
          variant="secondary"
          className="rounded-full cursor-default"
        >
          <Target className="w-4 h-4 me-2" />
          {t("SectionTwo.title")}
        </GradientButton>
      </div>
      <h1 className="font-inter text-xl md:text-4xl text-gray-900 font-semibold flex gap-1 md:gap-2 max-w-[1000px] flex-wrap items-center justify-center">
        {words.map((word, index) => {
          return (
            <motion.span
              key={index}
              style={{ opacity: opacityHooks[index] }}
              className={cn(
                [
                  "MoXey",
                  "banking",
                  "payments.",
                  "financial",
                  "operations",
                ].includes(word) && "text-mx-green",
              )}
            >
              {word}
            </motion.span>
          );
        })}
      </h1>
    </section>
  );
};

export default WhatWeServeSection;

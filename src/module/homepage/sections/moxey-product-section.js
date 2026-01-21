"use client";
import { Box } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { GradientButton } from "@/components";

const MoxeyProductSection = () => {
  const [isMouseEnterFirstContainer, setIsMouseEnterFirstContainer] =
    useState(false);
  const [isMouseEnterSecondContainer, setIsMouseEnterSecondContainer] =
    useState(false);
  const [isMouseEnterThirdContainer, setIsMouseEnterThirdContainer] =
    useState(false);
  const [isMouseEnterFourthContainer, setIsMouseEnterFourthContainer] =
    useState(false);
  const [isMouseEnterFifthContainer, setIsMouseEnterFifthContainer] =
    useState(false);

  const t = useTranslations("HomePage");

  return (
    <section className="font-inter relative min-h-[80vh] h-full flex flex-col justify-stretch items-center bg-mx-gray px-5 md:px-10">
      <div className="h-full w-full max-w-[1150px] flex flex-col items-center pt-20 pb-14 text-center">
        {/* Heading */}
        <div className="mb-5 flex flex-col items-center space-y-5">
          <GradientButton
            variant="secondary"
            className="rounded-full cursor-default text-sm md:text-base capitalize"
          >
            <Box className="w-4 h-4 me-2" />
            {t("SectionThird.badge")}
          </GradientButton>
          <div className="space-y-3">
            <h2 className="text-xl px-5 md:px-0 md:text-4xl text-gray-900 font-semibold capitalize">
              {t("SectionThird.title")}
            </h2>
          </div>
        </div>

        {/* content */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 gap-3 mt-10 md:mt-14">
          {/* 1 */}
          <motion.div
            className="md:col-span-7 bg-white/90 rounded-md border border-gray-200/80 h-[400px] flex flex-col justify-between shadow-md"
            onHoverStart={() => setIsMouseEnterFirstContainer(true)}
            onHoverEnd={() => setIsMouseEnterFirstContainer(false)}
          >
            {/* Image */}
            <div className="h-full relative flex items-end justify-center overflow-hidden">
              <motion.div
                className="absolute -bottom-40 z-1"
                animate={{
                  scale: isMouseEnterFirstContainer ? 1.1 : 1,
                  y: isMouseEnterFirstContainer ? 20 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/bento-1-1.png"
                  alt="moxey-pay-logo"
                  width="400"
                  height="60"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-37"
                animate={{
                  scale: isMouseEnterFirstContainer ? 1.25 : 1,
                  x: isMouseEnterFirstContainer ? 20 : 0,
                  y: isMouseEnterFirstContainer ? -10 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/bento-1-2.png"
                  alt="moxey-pay-logo"
                  width="200"
                  height="60"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-38"
                animate={{
                  scale: isMouseEnterFirstContainer ? 1.25 : 1,
                  x: isMouseEnterFirstContainer ? -30 : 0,
                  y: isMouseEnterFirstContainer ? -10 : 0,
                }}
              >
                <Image
                  src="/bento-1-3.png"
                  alt="moxey-pay-logo"
                  width="200"
                  height="60"
                />
              </motion.div>
              {/* Blending Gradient Effect */}
              <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white via-mx-gray/20 to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="text-start p-5 space-y-1">
              {/* Brand logo */}
              <div>
                <Image
                  src="/moxeypay-1.png"
                  alt="moxey-pay-logo"
                  width="110"
                  height="60"
                />
              </div>
              <p className="font-semibold text-lg">
                {t("SectionThird.pay.title")}
              </p>
              <p className="text-gray-800">{t("SectionThird.pay.content")}</p>
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div
            className="md:col-span-5 bg-white/90 rounded-md border border-gray-200/80 h-[400px] flex flex-col justify-between shadow-md"
            onHoverStart={() => setIsMouseEnterSecondContainer(true)}
            onHoverEnd={() => setIsMouseEnterSecondContainer(false)}
          >
            {/* Image */}
            <div className="h-full relative flex items-end justify-center overflow-hidden">
              <motion.div
                className="absolute top-12 left-10 -rotate-12"
                animate={{
                  scale: isMouseEnterSecondContainer ? 1.1 : 1,
                  y: isMouseEnterSecondContainer ? 20 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/bento-2-1.png"
                  alt="moxey-pay-logo"
                  width="200"
                  height="60"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-20 right-24 rotate-6"
                animate={{
                  scale: isMouseEnterSecondContainer ? 1.25 : 1,
                  x: isMouseEnterSecondContainer ? 30 : 0,
                  y: isMouseEnterSecondContainer ? -10 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/bento-2-2.png"
                  alt="moxey-pay-logo"
                  width="200"
                  height="60"
                />
              </motion.div>

              {/* Blending Gradient Effect */}
              <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white via-mx-gray/20 to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="text-start p-5 space-y-1">
              {/* Brand logo */}
              <div>
                <Image
                  src="/moxeyscf-1.png"
                  alt="moxey-pay-logo"
                  width="110"
                  height="60"
                />
              </div>
              <p className="font-semibold text-lg">
                {t("SectionThird.scf.title")}
              </p>
              <p className="text-gray-800">{t("SectionThird.scf.content")}</p>
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            className="md:col-span-4 bg-white/90 rounded-md border border-gray-200/80 h-[400px] flex flex-col justify-between shadow-md"
            onHoverStart={() => setIsMouseEnterThirdContainer(true)}
            onHoverEnd={() => setIsMouseEnterThirdContainer(false)}
          >
            {/* Image */}
            <div className="h-full relative flex items-end justify-center overflow-hidden">
              {/* Blending Gradient Effect */}
              <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white via-mx-gray/20 to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="text-start p-5 space-y-1">
              {/* Brand logo */}
              <div>
                <Image
                  src="/moxeyleasing-1.png"
                  alt="moxey-pay-logo"
                  width="130"
                  height="60"
                />
              </div>
              <p className="font-semibold text-lg">
                {t("SectionThird.leasing.title")}
              </p>
              <p className="text-gray-800">
                {t("SectionThird.leasing.content")}
              </p>
            </div>
          </motion.div>

          {/* 4 */}
          <motion.div
            className="md:col-span-4 bg-white/90 rounded-md border border-gray-200/80 h-[400px] flex flex-col justify-between shadow-md"
            onHoverStart={() => setIsMouseEnterFourthContainer(true)}
            onHoverEnd={() => setIsMouseEnterFourthContainer(false)}
          >
            {/* Image */}
            <div className="h-full relative flex items-end justify-center overflow-hidden">
              <motion.div
                className="absolute top-6 right-10"
                animate={{
                  scale: isMouseEnterFourthContainer ? 1.1 : 1,
                  y: isMouseEnterFourthContainer ? -5 : 0,
                  rotate: isMouseEnterFourthContainer ? 6 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/bento-4-1.png"
                  alt="moxey-pay-logo"
                  width="200"
                  height="60"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-10 left-0"
                animate={{
                  scale: isMouseEnterFourthContainer ? 1.1 : 1,
                  y: isMouseEnterFourthContainer ? 20 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/bento-4-2.png"
                  alt="moxey-pay-logo"
                  width="300"
                  height="60"
                />
              </motion.div>

              {/* Blending Gradient Effect */}
              <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white via-mx-gray/20 to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="text-start p-5 space-y-1">
              {/* Brand logo */}
              <div>
                <Image
                  src="/moxeybnpl-1.png"
                  alt="moxey-pay-logo"
                  width="110"
                  height="60"
                />
              </div>
              <p className="font-semibold text-lg">
                {t("SectionThird.bnpl.title")}
              </p>
              <p className="text-gray-800">{t("SectionThird.bnpl.content")}</p>
            </div>
          </motion.div>

          {/* 5 */}
          <motion.div
            className="md:col-span-4 bg-white/90 rounded-md border border-gray-200/80 h-[400px] flex flex-col justify-between shadow-md"
            onHoverStart={() => setIsMouseEnterFifthContainer(true)}
            onHoverEnd={() => setIsMouseEnterFifthContainer(false)}
          >
            {/* Image */}
            <div className="h-full"></div>

            {/* Content */}
            <div className="text-start p-5 space-y-1">
              {/* Brand logo */}
              <div>
                <Image
                  src="/moxeyfactoring-1.png"
                  alt="moxey-pay-logo"
                  width="140"
                  height="60"
                />
              </div>
              <p className="font-semibold text-lg">
                {t("SectionThird.factoring.title")}
              </p>
              <p className="text-gray-800">
                {t("SectionThird.factoring.content")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoxeyProductSection;

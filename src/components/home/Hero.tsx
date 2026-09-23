import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 sm:mt-10 sm:px-6 lg:mt-12 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-10 rounded-2xl bg-[#15171D] px-6 py-10 sm:px-10 sm:py-14 lg:flex-row lg:gap-12 lg:px-14 lg:py-16">
        <div className="w-full max-w-2xl space-y-5 text-center lg:text-left">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-sm leading-6 text-[#9CA3AF] sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3.5 text-sm font-bold text-black"
          >
            BROWSE WORKOUTS
            <FiArrowRight />
          </Link>
        </div>

        <div className="w-full max-w-md lg:max-w-xl">
          <Image
            src={banner}
            alt="FitLog workout training"
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import Image from "next/image";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/6 bg-[#000000]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-xs text-[#777c87] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

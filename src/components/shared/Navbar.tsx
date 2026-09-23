"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiAlignLeft, FiX } from "react-icons/fi";

import logo from "@/assets/logo.png";

const navItems = [
  {
    name: "Workouts",
    href: "/",
  },
  {
    name: "My Plan",
    href: "/my-plan",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#000000]">
      <nav className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-2xl text-white transition-colors hover:text-[#ccff00] md:hidden"
        >
          {isMenuOpen ? <FiX /> : <FiAlignLeft />}
        </button>

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={logo}
            alt="FitLog Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />

          <h2 className="font-display text-2xl font-bold tracking-wide text-white">
            FITLOG
          </h2>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "border-[#ccff00] bg-[#ccff00]/10 text-[#ccff00]"
                      : "border-transparent text-white hover:border-[#ccff00]/50 hover:text-[#ccff00]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black transition-transform hover:scale-105 sm:px-4 sm:text-sm"
          >
            Plan <span>0</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-3 py-2 text-xs font-bold text-white transition-all hover:border-[#ccff00] hover:text-[#ccff00] sm:px-4 sm:text-sm"
          >
            Saved <span>0</span>
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 top-20 z-50 w-full border-t border-white/10 bg-[#15171D] px-4 py-5 shadow-xl md:hidden">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block rounded-xl border px-4 py-3 font-medium transition-all ${
                        isActive
                          ? "border-[#ccff00] bg-[#ccff00]/10 text-[#ccff00]"
                          : "border-transparent text-white hover:border-[#ccff00]/50 hover:bg-black hover:text-[#ccff00]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
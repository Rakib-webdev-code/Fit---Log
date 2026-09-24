import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const EmptyPlan = () => {
  return (
    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-[#15171D] p-4 sm:p-6">
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.08] bg-black/20 px-5 py-12 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
          FITLOG
        </p>

        <h2 className="mt-3 text-2xl font-bold uppercase text-white sm:text-3xl">
          NOTHING HERE YET
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#777c87]">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#c8ff00] px-5 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-[#d5ff3d]"
        >
          Go to workouts
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default EmptyPlan;
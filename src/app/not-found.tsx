import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#090a0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-[110px] font-black leading-none tracking-[-0.06em] text-[#c8ff00] sm:text-[150px]">
          404
        </h1>

        <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
          FITLOG
        </p>

        <h2 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#777c87] sm:text-base">
          The page or workout you are looking for doesn&apos;t exist or may
          have been moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[5px] bg-[#c8ff00] px-5 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-[#d5ff3d]"
          >
            <FiHome className="text-sm" />
            Back to workouts
          </Link>

          <Link
            href="/my-plan"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[5px] border border-white/[0.12] bg-[#14171d] px-5 text-[10px] font-black uppercase tracking-wide text-[#aeb2ba] transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
          >
            <FiArrowLeft className="text-sm" />
            My Plan
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
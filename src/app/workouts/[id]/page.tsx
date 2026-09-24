import Image from "next/image";
import { notFound } from "next/navigation";
import { FiClock, FiStar, FiZap } from "react-icons/fi";

import WorkoutActions from "@/components/workouts/WorkoutActions";
import getWorksData from "@/lib/workouts";

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  const workouts = await getWorksData();

  const workout = workouts.find(
    (item) => item.id === Number(id),
  );

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090a0d] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1180px]">
        <section className="overflow-hidden rounded-[10px] border border-white/[0.06] bg-[#0e1014]">
          <div className="grid lg:grid-cols-[46%_54%]">
            <div className="p-3 sm:p-4">
              <div className="relative h-[430px] overflow-hidden rounded-[8px] sm:h-[560px] lg:h-[650px]">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="px-5 pb-7 pt-4 sm:px-7 sm:pb-8 sm:pt-6 lg:px-8 lg:pb-9 lg:pt-8">
              <h1 className="text-3xl font-bold uppercase leading-none tracking-tight text-white sm:text-4xl">
                {workout.name}
              </h1>

              <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#858a94] sm:text-[15px]">
                {workout.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-[7px] border border-white/[0.04] bg-[#14171d] px-4 py-1 sm:px-5">
                <div className="flex min-h-[42px] items-center justify-between border-b border-white/[0.035]">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626873]">
                    Equipment
                  </span>
                  <span className="max-w-[55%] text-right text-[11px] font-semibold text-[#d6d8dc]">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex min-h-[42px] items-center justify-between border-b border-white/[0.035]">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626873]">
                    Difficulty
                  </span>
                  <span className="text-[11px] font-semibold text-[#d6d8dc]">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex min-h-[42px] items-center justify-between border-b border-white/[0.035]">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626873]">
                    Sets
                  </span>
                  <span className="text-[11px] font-semibold text-[#d6d8dc]">
                    {workout.sets}
                  </span>
                </div>

                <div className="flex min-h-[42px] items-center justify-between border-b border-white/[0.035]">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626873]">
                    Reps
                  </span>
                  <span className="text-[11px] font-semibold text-[#d6d8dc]">
                    {workout.reps}
                  </span>
                </div>

                <div className="flex min-h-[42px] items-center justify-between border-b border-white/[0.035]">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626873]">
                    Duration
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#d6d8dc]">
                    <FiClock className="text-[12px] text-[#c8ff00]" />
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex min-h-[42px] items-center justify-between border-b border-white/[0.035]">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626873]">
                    Calories
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#d6d8dc]">
                    <FiZap className="text-[12px] text-[#c8ff00]" />
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex min-h-[42px] items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626873]">
                    Rating
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#d6d8dc]">
                    <FiStar className="text-[12px] text-[#c8ff00]" />
                    {workout.rating}
                  </span>
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-[17px] font-bold uppercase tracking-wide text-white">
                  Instructions
                </h2>

                <ol className="mt-4 space-y-3">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={`${instruction}-${index}`}
                      className="flex gap-3"
                    >
                      <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#c8ff00] text-[9px] font-black text-black">
                        {index + 1}
                      </span>

                      <p className="text-[12px] leading-6 text-[#858a94] sm:text-[13px]">
                        {instruction}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <WorkoutActions workout={workout} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkoutDetails;
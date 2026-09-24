import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiZap } from "react-icons/fi";

import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl bg-[#15171D] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[#C2F800]/30 px-2.5 py-1 text-xs font-medium text-[#C2F800]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#C2F800]">
          {workout.name}
        </h3>

        <p className="mt-2 line-clamp-1 text-sm text-[#9CA3AF]">
          {workout.equipment}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-[#9CA3AF]">
          <span className="flex items-center gap-1.5">
            <FiClock className="text-[#C2F800]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <FiZap className="text-[#C2F800]" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <FiStar className="text-[#C2F800]" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiClock,
  FiStar,
  FiX,
  FiZap,
} from "react-icons/fi";
import { toast } from "react-toastify";

import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/types/workout";

interface PlanWorkoutCardProps {
  workout: Workout;
  type: "plan" | "saved";
}

const PlanWorkoutCard = ({
  workout,
  type,
}: PlanWorkoutCardProps) => {
  const {
    doneWorkouts = [],
    removeFromPlan,
    removeSavedWorkout,
    markAsDone,
  } = useFitLog();

  const isDone = doneWorkouts.includes(workout.id);

  const handleRemove = () => {
    if (type === "plan") {
      removeFromPlan(workout.id);
      toast.success("Workout removed from today's plan.");
      return;
    }

    removeSavedWorkout(workout.id);
    toast.success("Workout removed from saved.");
  };

  const handleMarkAsDone = () => {
    if (isDone) {
      toast.info("Workout is already marked as done.");
      return;
    }

    markAsDone(workout.id);
    toast.success("Workout marked as done.");
  };

  return (
    <article className="overflow-hidden rounded-xl border border-white/6 bg-[#15171D]">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
        <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-28">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="mt-1 truncate text-xs text-[#777c87]">
            {workout.equipment}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-[10px] text-[#9CA3AF]">
            <span className="flex items-center gap-1">
              <FiClock className="text-[#c8ff00]" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <FiZap className="text-[#c8ff00]" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <FiStar className="text-[#c8ff00]" />
              {workout.rating}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <Link
            href={`/workouts/${workout.id}`}
            className="inline-flex h-9 items-center justify-center rounded-md border border-white/12 px-3 text-[9px] font-black uppercase tracking-wide text-[#aeb2ba] transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
          >
            View Details
          </Link>

          {type === "plan" && (
            <button
              type="button"
              onClick={handleMarkAsDone}
              disabled={isDone}
              className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-md px-3 text-[9px] font-black uppercase tracking-wide transition ${
                isDone
                  ? "cursor-default border border-[#c8ff00]/30 bg-[#c8ff00]/10 text-[#c8ff00]"
                  : "bg-[#c8ff00] text-black hover:bg-[#d5ff3d]"
              }`}
            >
              <FiCheck />
              {isDone ? "Done" : "Mark as Done"}
            </button>
          )}

          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/6 text-[#777c87] transition hover:border-red-400 hover:text-red-400"
          >
            <FiX />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;
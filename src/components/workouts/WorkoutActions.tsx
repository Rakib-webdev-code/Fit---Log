"use client";

import { FiBookmark, FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const {
    plannedWorkouts,
    savedWorkouts,
    addToPlan,
    saveWorkout,
  } = useFitLog();

  const alreadyPlanned = plannedWorkouts.some(
    (item) => item.id === workout.id,
  );

  const alreadySaved = savedWorkouts.some(
    (item) => item.id === workout.id,
  );

  const planIsFull = plannedWorkouts.length >= 5;

  const handleAddToPlan = () => {
    if (alreadyPlanned) {
      toast.info("This workout is already in today's plan.");
      return;
    }

    if (planIsFull) {
      toast.error("Today's plan can contain a maximum of 5 workouts.");
      return;
    }

    addToPlan(workout);
    toast.success("Workout added to today's plan.");
  };

  const handleSaveForLater = () => {
    if (alreadySaved) {
      toast.info("This workout is already saved.");
      return;
    }

    saveWorkout(workout);
    toast.success("Workout saved for later.");
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={planIsFull}
        className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-[5px] px-4 text-[9px] font-black uppercase tracking-wide transition ${
          planIsFull
            ? "cursor-not-allowed bg-white/[0.08] text-[#555b66]"
            : "bg-[#c8ff00] text-black hover:bg-[#d5ff3d]"
        }`}
      >
        <FiPlus className="text-[12px]" />
        {planIsFull ? "Plan Full" : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-[5px] border bg-[#14171d] px-4 text-[9px] font-black uppercase tracking-wide transition ${
          alreadySaved
            ? "border-[#c8ff00]/40 text-[#c8ff00]"
            : "border-white/[0.12] text-[#aeb2ba] hover:border-[#c8ff00] hover:text-[#c8ff00]"
        }`}
      >
        <FiBookmark className="text-[11px]" />
        {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;
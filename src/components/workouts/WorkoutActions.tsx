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

  const handleAddToPlan = () => {
    const alreadyPlanned = plannedWorkouts.some(
      (item) => item.id === workout.id,
    );

    if (alreadyPlanned) {
      toast.info("This workout is already in today's plan.");
      return;
    }

    if (plannedWorkouts.length >= 5) {
      toast.error("Today's plan can contain a maximum of 5 workouts.");
      return;
    }

    addToPlan(workout);
    toast.success("Workout added to today's plan.");
  };

  const handleSaveForLater = () => {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id,
    );

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
        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-[5px] bg-[#c8ff00] px-4 text-[9px] font-black uppercase tracking-wide text-black transition hover:bg-[#d5ff3d]"
      >
        <FiPlus className="text-[12px]" />
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-[5px] border border-white/12 bg-[#14171d] px-4 text-[9px] font-black uppercase tracking-wide text-[#aeb2ba] transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
      >
        <FiBookmark className="text-[11px]" />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;


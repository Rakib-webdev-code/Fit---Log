"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import type { Workout } from "@/types/workout";

interface FitLogContextType {
  plannedWorkouts: Workout[];
  savedWorkouts: Workout[];
  doneWorkouts: number[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (workoutId: number) => void;
  saveWorkout: (workout: Workout) => void;
  removeSavedWorkout: (workoutId: number) => void;
  markAsDone: (workoutId: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

interface FitLogProviderProps {
  children: ReactNode;
}

export const FitLogProvider = ({ children }: FitLogProviderProps) => {
  const [plannedWorkouts, setPlannedWorkouts] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  const [doneWorkouts, setDoneWorkouts] = useState<number[]>([]);

  const addToPlan = (workout: Workout) => {
    setPlannedWorkouts((prev) => {
      if (prev.length >= 5) {
        return prev;
      }

      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const removeFromPlan = (workoutId: number) => {
    setPlannedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== workoutId),
    );

    setDoneWorkouts((prev) =>
      prev.filter((id) => id !== workoutId),
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSavedWorkouts((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const removeSavedWorkout = (workoutId: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== workoutId),
    );
  };

  const markAsDone = (workoutId: number) => {
    setDoneWorkouts((prev) => {
      if (prev.includes(workoutId)) {
        return prev;
      }

      return [...prev, workoutId];
    });
  };

  return (
    <FitLogContext.Provider
      value={{
        plannedWorkouts,
        savedWorkouts,
        doneWorkouts,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSavedWorkout,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
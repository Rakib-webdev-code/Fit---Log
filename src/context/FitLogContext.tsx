"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Workout } from "@/types/workout";

interface FitLogContextType {
  plannedWorkouts: Workout[];
  savedWorkouts: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (workoutId: number) => void;
  saveWorkout: (workout: Workout) => void;
  removeSavedWorkout: (workoutId: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

interface FitLogProviderProps {
  children: ReactNode;
}

export const FitLogProvider = ({ children }: FitLogProviderProps) => {
  const [plannedWorkouts, setPlannedWorkouts] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    setPlannedWorkouts((prev) => [...prev, workout]);
  };

  const removeFromPlan = (workoutId: number) => {
    setPlannedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== workoutId),
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSavedWorkouts((prev) => [...prev, workout]);
  };

  const removeSavedWorkout = (workoutId: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== workoutId),
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plannedWorkouts,
        savedWorkouts,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSavedWorkout,
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
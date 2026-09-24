"use client";

import { FiActivity, FiClock, FiZap } from "react-icons/fi";

import { useFitLog } from "@/context/FitLogContext";

const PlanMetrics = () => {
  const { plannedWorkouts } = useFitLog();

  const totalMinutes = plannedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plannedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const metrics = [
    {
      label: "Exercises",
      value: plannedWorkouts.length,
      icon: FiActivity,
    },
    {
      label: "Minutes",
      value: totalMinutes,
      icon: FiClock,
    },
    {
      label: "Calories",
      value: totalCalories,
      icon: FiZap,
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-white/[0.06] bg-[#15171D] p-3 sm:p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-xl border border-white/[0.06] bg-[#15171D] px-5 py-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#777c87]">
                  {metric.label}
                </p>

                <Icon className="text-lg text-[#c8ff00]" />
              </div>

              <p className="mt-3 text-3xl font-bold text-white">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3 px-2">
        <span className="h-px flex-1 bg-white/[0.08]" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#c8ff00]" />

        <span className="h-px flex-1 bg-white/[0.08]" />
      </div>
    </div>
  );
};

export default PlanMetrics;

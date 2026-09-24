"use client";

import { useMemo, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

import EmptyPlan from "@/components/my-plan/EmptyPlan";
import PlanHeader from "@/components/my-plan/PlanHeader";
import PlanMetrics from "@/components/my-plan/PlanMetrics";
import PlanTabs from "@/components/my-plan/PlanTabs";
import PlanWorkoutCard from "@/components/my-plan/PlanWorkoutCard";
import { useFitLog } from "@/context/FitLogContext";

type SortOption = "duration" | "calories" | "rating";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const { plannedWorkouts, savedWorkouts } = useFitLog();

  const currentWorkouts = useMemo(() => {
    const workouts =
      activeTab === "plan" ? plannedWorkouts : savedWorkouts;

    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [activeTab, plannedWorkouts, savedWorkouts, sortBy]);

  const sortOptions: { value: SortOption; label: string }[] = [
    {
      value: "duration",
      label: "Duration",
    },
    {
      value: "calories",
      label: "Calories",
    },
    {
      value: "rating",
      label: "Rating",
    },
  ];

  const selectedSortLabel =
    sortOptions.find((option) => option.value === sortBy)?.label ??
    "Duration";

  return (
    <main className="min-h-screen bg-[#000000] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <PlanHeader />

        <PlanMetrics />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PlanTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <div className="relative self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setIsSortOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#15171D] px-4 py-2.5 text-[10px] font-black uppercase tracking-wide transition hover:border-[#c8ff00]"
            >
              <span className="text-[#777c87]">Sort By</span>

              <span className="text-[#c8ff00]">
                {selectedSortLabel}
              </span>

              <FiChevronDown
                className={`text-sm text-[#c8ff00] transition-transform ${
                  isSortOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full z-30 mt-2 w-40 overflow-hidden rounded-lg border border-white/[0.08] bg-[#15171D] p-1.5 shadow-2xl">
                {sortOptions.map((option) => {
                  const isActive = sortBy === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide transition ${
                        isActive
                          ? "bg-[#c8ff00]/10 text-[#c8ff00]"
                          : "text-[#9CA3AF] hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {option.label}

                      {isActive && <FiCheck className="text-sm" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {currentWorkouts.length > 0 ? (
          <div className="mt-6 space-y-4">
            {currentWorkouts.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                type={activeTab}
              />
            ))}
          </div>
        ) : (
          <EmptyPlan />
        )}
      </div>
    </main>
  );
};

export default MyPlan;
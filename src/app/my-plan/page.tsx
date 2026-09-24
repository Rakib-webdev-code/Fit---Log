"use client";

import { useMemo, useState } from "react";
import {
  FiCheck,
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";

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
  const [searchTerm, setSearchTerm] = useState("");

  const { plannedWorkouts, savedWorkouts } = useFitLog();

  const currentWorkouts = useMemo(() => {
    const workouts =
      activeTab === "plan" ? plannedWorkouts : savedWorkouts;

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredWorkouts = normalizedSearch
      ? workouts.filter((workout) => {
          const name = workout.name.toLowerCase();

          const tags = workout.muscleGroups
            .join(" ")
            .toLowerCase();

          return (
            name.includes(normalizedSearch) ||
            tags.includes(normalizedSearch)
          );
        })
      : workouts;

    return [...filteredWorkouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [
    activeTab,
    plannedWorkouts,
    savedWorkouts,
    sortBy,
    searchTerm,
  ]);

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

  const hasCurrentWorkouts =
    activeTab === "plan"
      ? plannedWorkouts.length > 0
      : savedWorkouts.length > 0;

  return (
    <main className="min-h-screen bg-[#000000] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <PlanHeader />

        <PlanMetrics />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <PlanTabs
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setSearchTerm("");
            }}
          />

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <div className="relative flex-1 sm:min-w-65">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#777c87]" />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search name or tag..."
                className="h-10 w-full rounded-lg border border-white/6 bg-[#15171D] pl-9 pr-4 text-xs text-white outline-none placeholder:text-[#555b66] focus:border-[#c8ff00]"
              />
            </div>

            <div className="relative self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setIsSortOpen((prev) => !prev)}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/6 bg-[#15171D] px-4 text-[10px] font-black uppercase tracking-wide transition hover:border-[#c8ff00]"
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
                <div className="absolute right-0 top-full z-30 mt-2 w-40 overflow-hidden rounded-lg border border-white/8 bg-[#15171D] p-1.5 shadow-2xl">
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
                            : "text-[#9CA3AF] hover:bg-white/4 hover:text-white"
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
        </div>

        {!hasCurrentWorkouts ? (
          <EmptyPlan />
        ) : currentWorkouts.length > 0 ? (
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
          <div className="mt-6 rounded-2xl border border-white/6 bg-[#15171D] p-6">
            <div className="flex min-h-55 flex-col items-center justify-center text-center">
              <FiSearch className="text-2xl text-[#c8ff00]" />

              <h2 className="mt-4 text-2xl font-bold uppercase text-white">
                NO MATCHES FOUND
              </h2>

              <p className="mt-2 text-sm text-[#777c87]">
                Try another workout name or muscle tag.
              </p>

              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="mt-5 rounded-lg bg-[#c8ff00] px-5 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-[#d5ff3d]"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;
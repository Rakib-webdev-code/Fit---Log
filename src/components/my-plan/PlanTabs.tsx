"use client";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  onTabChange: (tab: "plan" | "saved") => void;
}

const PlanTabs = ({ activeTab, onTabChange }: PlanTabsProps) => {
  return (
    <div className="mt-8 inline-flex rounded-lg border border-white/6 bg-[#15171D] p-1">
      <button
        type="button"
        onClick={() => onTabChange("plan")}
        className={`rounded-md px-5 py-2.5 text-[10px] font-black uppercase tracking-wide transition ${
          activeTab === "plan"
            ? "bg-[#c8ff00] text-black"
            : "text-[#777c87] hover:text-white"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        type="button"
        onClick={() => onTabChange("saved")}
        className={`rounded-md px-5 py-2.5 text-[10px] font-black uppercase tracking-wide transition ${
          activeTab === "saved"
            ? "bg-[#c8ff00] text-black"
            : "text-[#777c87] hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;

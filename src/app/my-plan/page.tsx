import PlanHeader from "@/components/my-plan/PlanHeader";
import PlanMetrics from "@/components/my-plan/PlanMetrics";

const MyPlan = () => {
  return (
    <main className="min-h-screen bg-[#000000] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <PlanHeader />
        <PlanMetrics/>
      </div>
    </main>
  );
};

export default MyPlan;

import getWorksData from "@/lib/workouts";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = async () => {
  const workouts = await getWorksData();

  return (
    <section id="library" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-sm text-[#9CA3AF] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {workouts.map((workout) => (
    <WorkoutCard key={workout.id} workout={workout} />
  ))}
</div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
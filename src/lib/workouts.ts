import { Workout } from "@/types/workout";

const getWorksData = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Data is not found");
  }

  return res.json();
};

export default getWorksData;
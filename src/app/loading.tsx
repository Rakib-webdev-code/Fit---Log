const Loading = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#000000] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Hero Skeleton */}
        <section className="rounded-2xl bg-[#15171D] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-5">
              <div className="h-3 w-32 animate-pulse rounded bg-white/10" />

              <div className="space-y-3">
                <div className="h-10 w-full animate-pulse rounded bg-white/10 sm:h-12" />
                <div className="h-10 w-4/5 animate-pulse rounded bg-white/10 sm:h-12" />
              </div>

              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-white/5" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-white/5" />
                <div className="h-3 w-2/3 animate-pulse rounded bg-white/5" />
              </div>

              <div className="h-12 w-44 animate-pulse rounded-xl bg-white/10" />
            </div>

            <div className="h-64 w-full animate-pulse rounded-xl bg-white/10 sm:h-80 lg:h-96" />
          </div>
        </section>

        {/* Library Heading Skeleton */}
        <section className="pt-16">
          <div className="h-8 w-48 animate-pulse rounded bg-white/10 sm:h-10" />
          <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-white/5" />
        </section>

        {/* Workout Cards Skeleton */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-[#15171D]"
            >
              <div className="aspect-[4/3] animate-pulse bg-white/10" />

              <div className="space-y-4 p-5">
                <div className="flex gap-2">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-white/10" />
                  <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
                </div>

                <div className="h-6 w-3/4 animate-pulse rounded bg-white/10" />

                <div className="h-4 w-1/2 animate-pulse rounded bg-white/5" />

                <div className="flex justify-between border-t border-white/10 pt-4">
                  <div className="h-4 w-16 animate-pulse rounded bg-white/5" />
                  <div className="h-4 w-16 animate-pulse rounded bg-white/5" />
                  <div className="h-4 w-12 animate-pulse rounded bg-white/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;

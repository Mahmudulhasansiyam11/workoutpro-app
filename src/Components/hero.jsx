"use client";

export default function Hero() {
  return (
    <section
      className="w-full min-h-[100vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white space-y-6 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Plan your workouts.
          <br />
          Track your progress.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
          A modern fitness planner to help you stay consistent and motivated.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold text-lg">
            Get Started
          </button>

          <button className="px-8 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition text-white font-semibold text-lg">
            Explore Workouts
          </button>
        </div>
      </div>
    </section>
  );
}

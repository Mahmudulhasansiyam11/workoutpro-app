
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PopularWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("https://workout-pro-api-server.vercel.app/workOuts");
        const data = await res.json();
        setWorkouts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching workouts:", error);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading workouts...</p>;

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-zinc-100 to-gray-200 dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-4 tracking-tight">
          Popular Workouts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-14">
          Explore the most trending and effective workout sessions
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {workouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-zinc-700 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500"
            >
              {/* Image */}
              <div className="relative w-full h-60 bg-gray-100 flex items-center justify-center p-3 overflow-hidden">
                <Image
                  src={workout.imageUrl || "/default-workout.jpg"}
                  alt={workout.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500 transition">
                  {workout.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {workout.shortDescription || "No description available."}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between mb-5">
                  <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-md text-sm font-medium">
                    {workout.duration} min
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-md text-sm font-medium capitalize">
                    {workout.difficulty}
                  </span>
                </div>

                {/* Button */}
                <a
                  href={`/workouts/${workout._id}`}
                  className="mt-auto text-center px-4 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition w-full shadow-md hover:shadow-lg"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Workouts Button */}
        <div className="mt-12 text-center">
          <Link href="/workouts">
            <button className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition">
              View All Workouts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

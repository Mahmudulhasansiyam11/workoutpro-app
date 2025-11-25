"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:5000/allWorkOuts");
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

  // FILTER + SEARCH LOGIC
  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch =
      workout.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workout.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      workout.difficulty.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-zinc-100 to-gray-200 dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
          All Workouts
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Find the perfect workout for your fitness goal
        </p>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search workouts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-white shadow-md focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/4 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-white shadow-md focus:ring-2 focus:ring-green-500 outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-zinc-700 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500"
            >
              {/* Image */}
              <div className="relative w-full h-60 bg-gray-100 p-3 overflow-hidden">
                <Image
                  src={workout.imageUrl || "/default-workout.jpg"}
                  alt={workout.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500 transition">
                  {workout.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {workout.shortDescription}
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

                {/* View Details Button */}
                <Link
                  href={`/workouts/${workout._id}`}
                  className="mt-auto w-full text-center py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition shadow-md hover:shadow-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Found */}
        {filteredWorkouts.length === 0 && (
          <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
            No workouts found.
          </p>
        )}
      </div>
    </section>
  );
}

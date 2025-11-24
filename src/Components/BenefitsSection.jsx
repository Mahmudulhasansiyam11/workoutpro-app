"use client";

import React from "react";
import { FaCheckCircle, FaStar, FaHeart } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaCheckCircle className="w-8 h-8 text-green-500" />,
    title: "Stay Consistent",
    description:
      "Track your workouts and maintain a routine easily with daily reminders and progress tracking.",
  },
  {
    id: 2,
    icon: <FaStar className="w-8 h-8 text-yellow-400" />,
    title: "Personalized Plans",
    description:
      "Get customized workout plans based on your goals, fitness level, and preferences.",
  },
  {
    id: 3,
    icon: <FaHeart className="w-8 h-8 text-red-500" />,
    title: "Beginner-Friendly",
    description:
      "Simple and easy-to-follow exercises that are perfect for anyone starting their fitness journey.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-zinc-50 to-gray-200 dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Why Choose WorkoutPro?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Discover the key benefits that make WorkoutPro your perfect fitness companion.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-5">{benefit.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

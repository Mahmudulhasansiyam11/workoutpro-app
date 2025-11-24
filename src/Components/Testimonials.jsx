"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "Yoga Enthusiast",
    review:
      "WorkoutPro helped me stay consistent and track my progress. I feel stronger every day!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Williams",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "HIIT Lover",
    review:
      "The personalized plans are amazing. I’ve never been more motivated to work out.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Beginner",
    review:
      "I love how beginner-friendly everything is. The app makes workouts simple and fun!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-zinc-50 to-gray-500 dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Real experiences from people who achieved their fitness goals with WorkoutPro
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-green-500">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-green-500 text-sm mb-4">{testimonial.role}</p>

              {/* Review */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                {testimonial.review}
              </p>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < testimonial.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.364 2.446a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.364-2.446a1 1 0 00-1.176 0l-3.364 2.446c-.784.57-1.838-.197-1.539-1.118l1.285-3.958a1 1 0 00-.364-1.118L2.938 9.385c-.784-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.958z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



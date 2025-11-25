"use client"; 

import { useState } from "react";


const dietPlans = [
  {
    id: 1,
    title: "Weight Loss Plan",
    category: "Weight Loss",
    duration: "4 Weeks",
    calories: "1500 kcal/day",
    description: "A balanced diet to burn fat and lose weight safely.",
    image: "https://i.ibb.co.com/WR73Kyj/Weight-Loss-Plan.jpg",
  },
  {
    id: 2,
    title: "Muscle Gain Plan",
    category: "Muscle Gain",
    duration: "8 Weeks",
    calories: "2500 kcal/day",
    description: "High protein plan to help build lean muscle mass.",
    image: "https://i.ibb.co.com/kVBPNLzc/Muscle-Gain-Plan.jpg",
  },
  {
    id: 3,
    title: "Keto Plan",
    category: "Keto",
    duration: "6 Weeks",
    calories: "1800 kcal/day",
    description: "Low-carb, high-fat plan for ketosis and energy.",
    image: "https://i.ibb.co.com/fjXLk3x/Keto-Plan.jpg",
  },
  {
    id: 4,
    title: "Vegan Plan",
    category: "Vegan",
    duration: "4 Weeks",
    calories: "1600 kcal/day",
    description: "Plant-based meals for a healthy and sustainable diet.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Mediterranean Plan",
    category: "Weight Loss",
    duration: "6 Weeks",
    calories: "1700 kcal/day",
    description: "Heart-healthy plan with fresh vegetables, fish, and olive oil.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "Paleo Plan",
    category: "Muscle Gain",
    duration: "8 Weeks",
    calories: "2400 kcal/day",
    description: "Focuses on whole foods like meat, fish, fruits, and vegetables.",
    image: "https://i.ibb.co.com/Rk16901S/Paleo-Plan.jpg",
  },
  {
    id: 7,
    title: "Gluten-Free Plan",
    category: "Vegan",
    duration: "4 Weeks",
    calories: "1600 kcal/day",
    description: "Gluten-free meals for a clean and healthy diet.",
    image: "https://i.ibb.co.com/DHsMq6BN/Gluten-Free-Plan.jpg",
  },
  {
    id: 8,
    title: "Intermittent Fasting Plan",
    category: "Keto",
    duration: "6 Weeks",
    calories: "1800 kcal/day",
    description: "Eating within specific time windows for fat loss and energy.",
    image: "https://i.ibb.co.com/S7df8ryW/Intermittent-Fasting-Plan.jpg",
  },
];

const categories = ["All", "Weight Loss", "Muscle Gain", "Keto", "Vegan"];

export default function DietPlansPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlans =
    selectedCategory === "All"
      ? dietPlans
      : dietPlans.filter((plan) => plan.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Diet & Nutrition Plans
        </h1>
        <p className="text-gray-600 mb-8">
          Healthy eating plans tailored for your fitness goals.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Diet Plan Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2 text-center">
                <h2 className="text-lg font-bold text-gray-900">{plan.title}</h2>
                <p className="text-green-600 font-semibold">{plan.duration}</p>
                <p className="text-gray-700 font-medium">{plan.calories}</p>
                <p className="text-gray-500 text-sm">{plan.description}</p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

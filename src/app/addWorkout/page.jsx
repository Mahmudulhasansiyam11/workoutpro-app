

"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddWorkoutPage() {
  const [difficulty, setDifficulty] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);


  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const newWorkout = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
      duration: Number(form.duration.value),
      difficulty,
      imageUrl: form.imageUrl.value,
    };

    try {
      const res = await fetch("https://workout-pro-api-server.vercel.app/workOuts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWorkout),
      });

      if (!res.ok) {
        throw new Error("Failed to add workout");
      }

      await res.json();

      Swal.fire({
        icon: "success",
        title: "Workout Added!",
        text: "Your workout has been successfully created.",
        background: "#1e293b",
        color: "white",
        confirmButtonColor: "#10b981",
      });

      form.reset();
      setDifficulty("");
    } catch (error) {
      console.error("Error adding workout:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add workout!",
        background: "#1e293b",
        color: "white",
        confirmButtonColor: "#ef4444",
      });
    }

    setLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-slate-900 text-white mt-10 rounded-xl shadow-lg border border-slate-700">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-400">
        Add New Workout
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-2 font-semibold">Workout Title</label>
          <input
            name="title"
            type="text"
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-green-400 outline-none"
            placeholder="Enter workout title"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-2 font-semibold">Short Description</label>
          <textarea
            name="shortDescription"
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-green-400 outline-none"
            placeholder="Enter a short summary"
          ></textarea>
        </div>

        {/* Full Description */}
        <div>
          <label className="block mb-2 font-semibold">Full Description</label>
          <textarea
            name="fullDescription"
            required
            rows={4}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-green-400 outline-none"
            placeholder="Write the full workout description"
          ></textarea>
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-2 font-semibold">Duration (minutes)</label>
          <input
            name="duration"
            type="number"
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-green-400 outline-none"
            placeholder="Example: 30"
          />
        </div>

        {/* Difficulty Selector */}
        <div>
          <label className="block mb-2 font-semibold">Difficulty Level</label>

          <button
            type="button"
            onClick={() => setShowPopup(true)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-left"
          >
            {difficulty || "Select Difficulty"}
          </button>

          {showPopup && (
            <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
              <div className="bg-slate-900 p-6 rounded-lg shadow-xl w-80 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4">Choose Difficulty</h3>

                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      setDifficulty(level);
                      setShowPopup(false);
                    }}
                    className="w-full p-3 mb-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-green-500 hover:text-black transition"
                  >
                    {level}
                  </button>
                ))}

                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-2 w-full p-2 bg-red-500 text-white rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-semibold">Image URL</label>
          <input
            name="imageUrl"
            type="text"
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-green-400 outline-none"
            placeholder="Enter image URL"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400 transition"
        >
          {loading ? "Submitting..." : "Add Workout"}
        </button>
      </form>
    </section>
  );
}

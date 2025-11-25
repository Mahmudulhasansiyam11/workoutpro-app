"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ManageWorkoutsPage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Fetch workouts
  const fetchWorkouts = async () => {
    try {
      const res = await fetch("http://localhost:5000/allWorkOuts");
      const data = await res.json();
      setWorkouts(data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to load workouts", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  // Delete Workout
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This workout will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      background: "#1e293b",
      color: "white",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:5000/workOuts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Workout removed successfully.",
        background: "#1e293b",
        color: "white",
        confirmButtonColor: "#10b981",
      });

      // Refresh table
      fetchWorkouts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Could not delete workout.",
        background: "#1e293b",
        color: "white",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-green-400 text-xl">
        Loading workouts...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-12 p-6 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-lg">
      <h1 className="text-4xl font-bold text-center text-green-400 mb-8">
        Manage Workouts
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-slate-700 rounded-lg overflow-hidden">
          <thead className="bg-slate-800 text-green-300">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Difficulty</th>
              <th className="p-4 text-left">Duration</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {workouts.map((workout) => (
              <tr
                key={workout._id}
                className="border-t border-slate-700 hover:bg-slate-800/50 transition"
              >
                <td className="p-4 font-medium">{workout.title}</td>
                <td className="p-4">{workout.difficulty}</td>
                <td className="p-4">{workout.duration} min</td>

                <td className="p-4 flex justify-center gap-3">
                  {/* View Button */}
                  <Link
                    href={`/workouts/${workout._id}`}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-black rounded-lg font-semibold transition"
                  >
                    View
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(workout._id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-400 text-black rounded-lg font-semibold transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {workouts.length === 0 && (
        <p className="text-center text-gray-400 mt-6">
          No workouts found. Add one!
        </p>
      )}
    </div>
  );
}

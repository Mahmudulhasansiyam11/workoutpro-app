"use client";

import React, { useContext } from "react";
import { AuthContext } from "@/Provider/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleBackHome = () => {
    router.push("/"); // redirect to home
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p>Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#020617] px-4">
      <div className="bg-slate-800/90 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-slate-700 flex flex-col items-center gap-4 max-w-sm w-full">
        {/* Profile Image */}
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || "User Avatar"}
            className="w-24 h-24 rounded-full object-cover border-2 border-green-400"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-white text-xl font-bold border-2 border-green-400">
            {user.displayName?.charAt(0) || "U"}
          </div>
        )}

        {/* Name */}
        <h2 className="text-2xl font-semibold text-green-400">
          {user.displayName || "No Name"}
        </h2>

        {/* Email */}
        <p className="text-gray-300">{user.email || "No Email"}</p>

        {/* Back to Home Button */}
        <button
          onClick={handleBackHome}
          className="mt-4 px-6 py-2 rounded-lg bg-green-400 text-gray-900 font-semibold hover:bg-green-300 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

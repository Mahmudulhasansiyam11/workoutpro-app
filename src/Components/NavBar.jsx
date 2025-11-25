
"use client";

import { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/Provider/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      setIsDropdownOpen(false);
       router.push("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-lg sticky top-0 z-50">
      <div className="container px-6 py-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="WorkoutPro Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white tracking-wide">
            WorkoutPro
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/workouts" className="text-gray-300 hover:text-white transition">Workouts</Link>
          <Link href="/plans" className="text-gray-300 hover:text-white transition">Plans</Link>
          <Link href="/trainers" className="text-gray-300 hover:text-white transition">Trainers</Link>

          {/* Auth Buttons / User Dropdown */}
          <div className="flex items-center gap-3 relative">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-white hover:border-green-400 transition"
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg border border-slate-700 overflow-hidden z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-200 hover:bg-slate-700 transition"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/addWorkout"
                      className="block px-4 py-2 text-gray-200 hover:bg-slate-700 transition"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Add Workout
                    </Link>
                    <Link
                      href="/manageWorkouts"
                      className="block px-4 py-2 text-gray-200 hover:bg-slate-700 transition"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Manage Workouts
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-200 hover:bg-slate-700 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e293b] py-4 px-6 space-y-4">
          <Link href="/" className="block text-gray-200 hover:text-white">Home</Link>
          <Link href="/workouts" className="block text-gray-200 hover:text-white">Workouts</Link>
          <Link href="/plans" className="block text-gray-200 hover:text-white">Plans</Link>
          <Link href="/trainers" className="block text-gray-200 hover:text-white">Trainers</Link>

          {/* Auth Buttons / Mobile */}
          <div className="flex flex-col gap-3 pt-3">
            {user ? (
              <>
                <Link href="/profile">
                  <button className="w-full px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition">
                    Profile
                  </button>
                </Link>
                <Link href="/addWorkout">
                  <button className="w-full px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition">
                    Add Workout
                  </button>
                </Link>
                <Link href="/manageWorkouts">
                  <button className="w-full px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition">
                    Manage Workouts
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="w-full px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

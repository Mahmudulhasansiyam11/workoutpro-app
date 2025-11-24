"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login">
              <button className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition">
                Login
              </button>
            </Link>

            <Link href="/register">
              <button className="px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition">
                Register
              </button>
            </Link>
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

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-3">
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

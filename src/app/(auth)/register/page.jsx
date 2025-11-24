"use client";
import { use, useContext } from "react";
import { AuthContext } from "@/Provider/AuthContext/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
     const { googleSignIn, setUser } = use(AuthContext); // Use useContext here
      const router = useRouter();
    
      const handleGoogleSignIn = async () => {
        try {
          const result = await googleSignIn(); // Call context function
          setUser(result.user);
          router.push("/"); // Redirect after login
        } catch (error) {
          console.log("Google Sign-In Error:", error.message);
        }
      };
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#020617] px-4">
      <div className="max-w-md w-full bg-slate-900/90 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-slate-700">
        <h1 className="text-3xl font-bold text-green-400 text-center mb-6">
          Create an Account
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Join <span className="text-cyan-300 font-semibold">WorkoutPro</span> today!
        </p>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-gray-200 border border-slate-700 focus:border-green-400 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-gray-200 border border-slate-700 focus:border-green-400 focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-gray-200 border border-slate-700 focus:border-green-400 focus:outline-none transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-gray-200 border border-slate-700 focus:border-green-400 focus:outline-none transition"
            />
          </div>

          {/* Register Button */}
          <button
            type="button"
            className="w-full py-2 bg-green-400 text-gray-900 font-semibold rounded-md hover:bg-green-300 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Social Register */}
        <button
        onClick={handleGoogleSignIn}
          type="button"
          className="w-full flex items-center justify-center gap-3 py-2 border border-white rounded-md text-white hover:bg-white/10 transition"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Register with Google
        </button>

        <p className="text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <span className="text-green-400 font-semibold hover:text-cyan-300 cursor-pointer">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

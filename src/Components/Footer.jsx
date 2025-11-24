"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">WorkoutPro</h2>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate fitness companion. Plan workouts, track progress,
              and stay motivated every day.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaFacebookF size={16} />
              </a>
              <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaInstagram size={16} />
              </a>
              <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaTwitter size={16} />
              </a>
              <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/workouts" className="hover:text-white">Workouts</Link></li>
              <li><Link href="/plans" className="hover:text-white">Fitness Plans</Link></li>
              <li><Link href="/trainers" className="hover:text-white">Trainers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Guides</Link></li>
              <li><Link href="#" className="hover:text-white">Workout Tips</Link></li>
              <li><Link href="#" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>Email: support@workoutpro.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>

            {/* Newsletter */}
            <div className="mt-5">
              <p className="text-gray-400 mb-3">Subscribe for updates</p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded-md w-full text-gray-900"
                />
                <button className="px-4 py-2 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-200 transition">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} WorkoutPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

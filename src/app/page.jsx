import Features from "@/Components/Features";
import Hero from "@/Components/hero";
// import PopularWorkouts from "@/Components/PopularWorkouts";
import Image from "next/image";
// import Hero from "@/Components/Hero";
// import Features from "@/Components/Features";
import PopularWorkouts from "@/Components/PopularWorkouts"; // default import
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section */}
      <Hero></Hero>
      {/* Popular workouts section */}
      <PopularWorkouts></PopularWorkouts>
      {/* Features Section */}
      <Features></Features>
      {/* Testimonials Section */}
      <Testimonials></Testimonials>
      
    </div>
  );
}

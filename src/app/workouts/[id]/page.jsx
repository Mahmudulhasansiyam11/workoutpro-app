
import Image from "next/image";

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params; // dynamic route param

  // Fetch the workout by ID from your backend
  const res = await fetch(`http://localhost:5000/allWorkOuts/${id}`, {
    cache: "no-store", 
  });

  // Handle fetch errors
  if (!res.ok) {
    return <p className="text-center py-10">Failed to fetch workout data.</p>;
  }

  const workout = await res.json();

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
      {/* Image */}
      <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
        <Image
          src={workout.imageUrl || "/default-workout.jpg"}
          alt={workout.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
        {workout.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {workout.shortDescription}
      </p>

      {/* Full Description */}
      <p className="text-gray-700 dark:text-gray-200 mb-4">
        {workout.fullDescription}
      </p>

      {/* Meta Info */}
      <div className="flex gap-4 mb-6">
        <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-md font-medium">
          Duration: {workout.duration} min
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-md font-medium capitalize">
          {workout.difficulty}
        </span>
      </div>
    </section>
  );
}

// import React from "react";

// // Sample trainer data
// const trainers = [
//   {
//     id: 1,
//     name: "John Doe",
//     specialty: "Strength & Conditioning",
//     experience: "5 Years Experience",
//     certification: "ACE Certified",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     specialty: "Yoga & Flexibility",
//     experience: "8 Years Experience",
//     certification: "Yoga Alliance Certified",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     specialty: "HIIT & Cardio",
//     experience: "6 Years Experience",
//     certification: "NASM Certified",
//     image: "https://randomuser.me/api/portraits/men/65.jpg",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     specialty: "Pilates & Core",
//     experience: "7 Years Experience",
//     certification: "Polestar Certified",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
// ];

// export default function TrainersPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
//           Meet Our Expert Trainers
//         </h1>
//         <p className="text-gray-600 mb-12">
//           Our certified trainers will guide you to achieve your fitness goals efficiently.
//         </p>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {trainers.map((trainer) => (
//             <div
//               key={trainer.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//             >
//               <div className="relative">
//                 <img
//                   src={trainer.image}
//                   alt={trainer.name}
//                   className="h-64 w-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
//                   <h2 className="text-white text-lg font-bold">{trainer.name}</h2>
//                   <p className="text-gray-200 text-sm">{trainer.specialty}</p>
//                 </div>
//               </div>
//               <div className="p-6 space-y-2">
//                 <p className="text-gray-700 font-medium">{trainer.experience}</p>
//                 <p className="text-gray-500 text-sm">{trainer.certification}</p>
//                 <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
//                   View Profile
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";

// Sample trainer data
const trainers = [
  {
    id: 1,
    name: "John Doe",
    specialty: "Strength & Conditioning",
    experience: "5 Years Experience",
    certification: "ACE Certified",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    specialty: "Yoga & Flexibility",
    experience: "8 Years Experience",
    certification: "Yoga Alliance Certified",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    specialty: "HIIT & Cardio",
    experience: "6 Years Experience",
    certification: "NASM Certified",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    specialty: "Pilates & Core",
    experience: "7 Years Experience",
    certification: "Polestar Certified",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Meet Our Expert Trainers
        </h1>
        <p className="text-gray-600 mb-12">
          Our certified trainers will guide you to achieve your fitness goals efficiently.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Circle avatar at top center with full image */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card content */}
              <div className="pt-44 p-6 text-center space-y-2">
                <h2 className="text-xl font-bold text-gray-900">{trainer.name}</h2>
                <p className="text-green-600 font-semibold">{trainer.specialty}</p>
                <p className="text-gray-700 font-medium">{trainer.experience}</p>
                <p className="text-gray-500 text-sm">{trainer.certification}</p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

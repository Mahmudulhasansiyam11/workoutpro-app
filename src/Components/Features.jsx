export default function Features() {
  const features = [
    {
      title: "Workout Tracking",
      desc: "Easily track all your workouts, exercises, sets, and reps to monitor improvements over time.",
      icon: "🏋️‍♂️",
    },
    {
      title: "Custom Exercise Plans",
      desc: "Create personalized workout plans designed specifically for your fitness goals and schedule.",
      icon: "📋",
    },
    {
      title: "Progress Monitoring",
      desc: "Visualize your progress with charts, analytics, and weekly performance summaries.",
      icon: "📈",
    },
    {
      title: "Goal Setting",
      desc: "Set meaningful fitness goals and let the app guide you toward achieving them consistently.",
      icon: "🎯",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 px-5 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Powerful Features
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-600">
          Everything you need to stay motivated and consistent in your fitness journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all p-8 text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

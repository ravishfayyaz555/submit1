const Features: React.FC = () => {
    const features = [
      {
        title: "Green Forests",
        description: "Explore lush greenery and vibrant forests.",
        icon: "🌲",
      },
      {
        title: "Crystal Lakes",
        description: "Relax by serene crystal-clear lakes.",
        icon: "🌊",
      },
      {
        title: "Majestic Mountains",
        description: "Stand in awe of towering mountains.",
        icon: "⛰️",
      },
      {
        title: "Peaceful Meadows",
        description: "Unwind in tranquil and open meadows.",
        icon: "🌾",
      },
    ];
  
    return (
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-natureGreen">Our Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the elements of nature that bring peace to your soul.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl text-skyBlue mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-natureGreen">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  
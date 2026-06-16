import React from "react";

const HeroRatings = () => {
  const statsData = [
    { id: 1, count: "50K+", label: "Active Users" },
    { id: 2, count: "200+", label: "Premium Tools" },
    { id: 3, count: "4.9", label: "Rating" },
  ];
  return (
    <section className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#d946ef] text-white py-12 px-6 rounded-lg shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            className="flex items-center w-full justify-center"
          >
            <div className="text-center flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide dropped-shadow-sm">
                {stat.count}
              </h2>
              <p className="text-sm md:text-base text-purple-100 opacity-90 font-medium">
                {stat.label}
              </p>
            </div>

            {index < statsData.length - 1 && (
              <div className="hidden md:block h-16 w-[1px] bg-white/20 mx-4"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroRatings;

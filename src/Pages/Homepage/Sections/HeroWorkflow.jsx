import React from "react";

const HeroWorkflow = () => {
  return (
    <section className="bg-gradient-to-r from-[#6366f1] via-[#8b2cf5] to-[#a855f7] text-white py-12 text-center font-sans">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm md:text-base mb-8 opacity-90 leading-relaxed">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <button className="w-full sm:w-auto bg-white text-[#8b2cf5] font-bold px-8 py-3 rounded-full text-sm cursor-pointer">
            Explore Products
          </button>

          <button className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold px-8 py-3 rounded-full text-sm cursor-pointer">
            View Pricing
          </button>
        </div>

        <p className="text-xs opacity-75">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default HeroWorkflow;

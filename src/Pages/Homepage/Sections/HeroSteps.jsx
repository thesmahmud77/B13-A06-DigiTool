import React from "react";
import { FiUser, FiBox, FiRocket } from "react-icons/fi";

const HeroSteps = () => {
  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm flex flex-col items-center justify-center min-h-[280px]">
            <span className="absolute top-4 right-4 bg-[#7c3aed] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
              01
            </span>
            <div className="w-20 h-20 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-6">
              <FiUser className="w-8 h-8 text-[#7c3aed]" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Create Account
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-[240px]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm flex flex-col items-center justify-center min-h-[280px]">
            <span className="absolute top-4 right-4 bg-[#7c3aed] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
              02
            </span>
            <div className="w-20 h-20 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-6">
              <FiBox className="w-8 h-8 text-[#7c3aed]" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Choose Products
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-[240px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm flex flex-col items-center justify-center min-h-[280px]">
            <span className="absolute top-4 right-4 bg-[#7c3aed] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
              03
            </span>
            <div className="w-20 h-20 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-6">
              <FiRocket className="w-8 h-8 text-[#7c3aed]" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Start Creating
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-[240px]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSteps;

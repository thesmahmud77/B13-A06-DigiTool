import React from "react";
import { FiCheck } from "react-icons/fi";

const HeroPricing = () => {
  return (
    <section className="bg-[#f8fafc] py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[500px]">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Starter</h3>
              <p className="text-slate-400 text-xs mb-6">
                Perfect for getting started
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-slate-900">$0</span>
                <span className="text-slate-400 text-sm ml-1">/Month</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Access to 10 free tools</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Basic templates</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Community support</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>1 project per month</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 bg-[#8b2cf5] hover:bg-[#7622d6] text-white font-medium py-3 px-4 rounded-full transition-colors duration-200 text-sm">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-[#8b2cf5] rounded-3xl p-8 shadow-lg flex flex-col justify-between min-h-[500px] text-white transform md:-translate-y-2 border-2 border-[#8b2cf5]">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#fef08a] text-[#854d0e] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
              Most Popular
            </span>

            <div>
              <h3 className="text-xl font-bold mb-1">Pro</h3>
              <p className="text-purple-200 text-xs mb-6">
                Best for professionals
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-purple-200 text-sm ml-1">/Month</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <FiCheck className="text-white w-4 h-4 shrink-0" />
                  <span>Access to all premium tools</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FiCheck className="text-white w-4 h-4 shrink-0" />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FiCheck className="text-white w-4 h-4 shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FiCheck className="text-white w-4 h-4 shrink-0" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FiCheck className="text-white w-4 h-4 shrink-0" />
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FiCheck className="text-white w-4 h-4 shrink-0" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 bg-white hover:bg-purple-50 text-[#8b2cf5] font-semibold py-3 px-4 rounded-full transition-colors duration-200 text-sm">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[500px]">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Enterprise
              </h3>
              <p className="text-slate-400 text-xs mb-6">
                For teams and businesses
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-slate-900">$99</span>
                <span className="text-slate-400 text-sm ml-1">/Month</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>SLA guarantee</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <FiCheck className="text-green-500 w-4 h-4 shrink-0" />
                  <span>Custom branding</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 bg-[#8b2cf5] hover:bg-[#7622d6] text-white font-medium py-3 px-4 rounded-full transition-colors duration-200 text-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPricing;

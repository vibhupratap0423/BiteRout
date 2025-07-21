'use client';
import Link from 'next/link';

export default function PricingPlans() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Simple Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daily Plan */}
          <div className="bg-yellow-100 rounded-2xl shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Daily Plan</h3>
            <p className="text-3xl font-bold text-red-600 mb-2">₹120</p>
            <p className="mb-6 text-gray-700">Perfect for trying our service</p>
            <Link href="/pricing">
              <button className="bg-red-600 text-white font-medium px-6 py-2 rounded-full hover:bg-red-700 transition-all">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Weekly Plan */}
          <div className="bg-green-100 rounded-2xl shadow-md p-8 text-center relative">
            <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-4 py-1 rounded-full font-medium">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold mt-8 mb-2">Weekly Plan</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">₹839</p>
            <p className="mb-6 text-gray-700">Best Value<br />save upto ₹90/week</p>
            <Link href="/pricing">
              <button className="bg-green-600 text-white font-medium px-6 py-2 rounded-full hover:bg-green-700 transition-all">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Monthly Plan */}
          <div className="bg-blue-100 rounded-2xl shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">₹2999</p>
            <p className="mb-6 text-gray-700">Best value <br /> Save ₹600/month</p>
            <Link href="/pricing">
              <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
                Choose Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

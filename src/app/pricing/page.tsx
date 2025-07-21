'use client';
import React from 'react';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fff4e6] to-[#e6fff2] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Flexible pricing options to suit every need and budget
        </p>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Daily Plan */}
          <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Daily Plan</h3>
              <p className="text-3xl font-bold text-orange-600 mb-1">₹120</p>
              <p className="text-sm text-gray-600 mb-4">Per day</p>
              <ul className="text-left text-sm space-y-2">
                <li>✅ Fresh daily meal</li>
                <li>✅ Delivered by 12:30 PM</li>
                <li>✅ Standard portion</li>
                <li>✅ Basic customization</li>
                <li>❌ No subscription discount</li>
              </ul>
            </div>
            <Link href="/contactus">
              <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">
                Subscribe Now
              </button>
            </Link>
          </div>

          {/* Weekly Plan */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl border-4 border-green-500 relative flex flex-col justify-between">
            <div>
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-semibold mb-2">Weekly Plan</h3>
              <p className="text-3xl font-bold text-green-600 mb-1">₹839</p>
              <p className="text-sm text-green-700 mb-4">Save ₹90 per week!</p>
              <ul className="text-left text-sm space-y-2">
                <li>✅ 7 days of fresh meals</li>
                <li>✅ Delivered by 12:30 PM</li>
                <li>✅ Standard portion</li>
                <li>✅ Full customization</li>
                <li>✅ None day pause allowed</li>
              </ul>
            </div>
            <Link href="/contactus">
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full">
                Subscribe Now
              </button>
            </Link>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
              <p className="text-3xl font-bold text-blue-600 mb-1">₹2999</p>
              <p className="text-sm text-blue-700 mb-4">Save ₹600 per month!</p>
              <ul className="text-left text-sm space-y-2">
                <li>✅ 30 days of fresh meals</li>
                <li>✅ Delivered by 12:30 PM</li>
                <li>✅ Large portion option</li>
                <li>✅ Full customization</li>
                <li>✅ Closed on the last day of month</li>
              </ul>
            </div>
            <Link href="/contactus">
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                Subscribe Now
              </button>
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-xl text-sm bg-white shadow-md">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-4 text-left">Features</th>
                <th className="px-6 py-4 text-center">Daily</th>
                <th className="px-6 py-4 text-center bg-green-100">Weekly</th>
                <th className="px-6 py-4 text-center">Monthly</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Delivery Time', values: ['12:30 PM', '12:30 PM', '12:30 PM'] },
                { feature: 'Portion Size', values: ['Standard', 'Standard', 'Standard/Large'] },
                { feature: 'Menu Customization', values: ['Basic', 'Full', 'Full'] },
                { feature: 'Pause Days', values: ['None', 'None', 'Last Day of Month'] },
                { feature: 'Customer Support', values: ['Standard', 'Priority', 'Premium'] },
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="px-6 py-4 text-left font-medium">{row.feature}</td>
                  <td className="px-6 py-4 text-center">{row.values[0]}</td>
                  <td className="px-6 py-4 text-center bg-green-50">{row.values[1]}</td>
                  <td className="px-6 py-4 text-center">{row.values[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const backgrounds = [
  '/home/hero1.png',
  '/home/hero.png',
  '/home/hero3.png',
  '/home/hero7.png',
  '/home/hero2.png',
  '/home/hero6.png',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-20">
        {backgrounds.map((bg, i) => (
          <Image
            key={i}
            src={bg}
            alt={`Background ${i + 1}`}
            fill
            priority={i === 0}
            className={`object-cover absolute transition-opacity duration-1000 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Right-to-left dark shadow with light blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-black/50 via-black/20 to-transparent backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* Left Side Text */}
        <div className="space-y-6 text-white">
          <h1 className="text-4xl text-yellow-400 sm:text-5xl font-bold leading-tight">
            Delicious <br />
            Homemade Tiffin <br />
            <span className="text-red-400">Delivered Daily</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-md">
            Fresh, healthy, and authentic home-style meals prepared with love and delivered to your doorstep. Perfect for busy professionals, students, and families.
          </p>
          <Link href="/contactus">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-red-700 transition-all shadow-lg">
              Order Now 🍽️
            </button>
          </Link>
        </div>

        {/* Right Side Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
          <Image
            src="/home/bowl.png"
            alt="Tiffin Bowl"
            width={100}
            height={100}
          />
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-yellow-100 text-center text-black px-4 py-2 rounded-xl text-sm font-medium">
              🍛<br /> Dal & Rice
            </div>
            <div className="bg-pink-100 text-center text-black px-4 py-2 rounded-xl text-sm font-medium">
              🥬<br /> Fresh Veggies
            </div>
            <div className="bg-yellow-100 text-center text-black px-4 py-2 rounded-xl text-sm font-medium">
              🫓<br /> Rotis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

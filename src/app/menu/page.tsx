"use client";

import { useRouter } from "next/navigation";
import { FaPepperHot, FaFire } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const tiffins = [
  {
    title: "Veg Tiffin",
    desc: "Complete vegetarian meals with seasonal vegetables",
    spice: "Mild",
    calories: 350,
    color: "green",
  },
  {
    title: "Jain Tiffin",
    desc: "Specially prepared following Jain dietary guidelines",
    spice: "Mild",
    calories: 320,
    color: "orange",
  },
  {
    title: "Mini Tiffin",
    desc: "Perfect portion for light eaters and seniors",
    spice: "Mild",
    calories: 250,
    color: "purple",
  },
  {
    title: "Full Tiffin",
    desc: "Hearty meals for those with bigger appetites",
    spice: "Medium",
    calories: 450,
    color: "red",
  },
];

const lunchMenu = [
  {
    day: 'Monday',
    image: '/menu/monday-lunch.jpg',
    desc: 'Dal Makhani, Jeera Rice, Cabbage & Peas Sabzi, 4 Chapatis',
  },
  {
    day: 'Tuesday',
    image: '/menu/tuesday-lunch.jpg',
    desc: 'Chole Masala, Veg Pulao, Mix Vegetable Curry, 4 Chapati',
  },
  {
    day: 'Wednesday',
    image: '/menu/wednesday-lunch.jpg',
    desc: 'Dal Tadka, Steamed Rice, Mutter Paneer, and 4 Chapatis',
  },
  {
    day: 'Thursday',
    image: '/menu/thrusday-lunch.jpg',
    desc: ' Chole, Peas Pulao, Aloo Baingan, and 4 Rotis',
  },
  {
    day: 'Friday',
    image: '/menu/friday-lunch.jpg',
    desc: ' Lobia Masala, Steamed Rice, Tinda Masala, and 4 Rotis',
  },
  {
    day: 'Saturday',
    image: '/menu/saturday-lunch.jpg',
    desc: 'Shahi Paneer, Veg Pulao, Boondi Raita, and 4 Rotis',
  },
  {
    day: 'Sunday',
    image: '/menu/sunday-lunch.jpg',
    desc: ' Chana Masala, 4 Puris, Halwa',
  },
];

const dinnerMenu = [
  {
    day: 'Monday',
    image: '/menu/monday-dinner.jpg',
    desc: ' Paneer Butter Masala, 4 Chapatis, Steamed Rice, Arhar Dal',
  },
  {
    day: 'Tuesday',
    image: '/menu/tuesday-dinner.jpg',
    desc: ' Rajma Masala, Steamed Rice, Lauki ki Sabzi, 4 Rotis',
  },
  {
    day: 'Wednesday',
    image: '/menu/wednesday-dinner.jpg',
    desc: 'Dum Aloo, Veg Biryani, Raita, Rotis',
  },
  {
    day: 'Thursday',
    image: '/menu/thrusday-dinner.jpg',
    desc: ' Kadhai Paneer, 4 Chapatis, Jeera Rice, Moong Dal,Papad',
  },
  {
    day: 'Friday',
    image: '/menu/friday-dinner.jpg',
    desc: ' Malai Kofta, Kashmiri Pulao, 4 Rotis,Dal Makhani',
  },
  {
    day: 'Saturday',
    image: '/menu/saturday-dinner.jpg',
    desc: ' Pav Bhaji (served with 3 Pavs), Veg Pulao',
  },
  {
    day: 'Sunday',
    image: '/menu/sunday-dinner.jpg',
    desc: 'Palak Paneer, 2 Laccha Parathas, Dal Fry, Jeera Rice',
  },
];

export default function MenuPage() {
  const router = useRouter();

  const goToContact = () => router.push("/contactus");

  return (
    <main className="bg-gradient-to-br from-[#fff4e6] to-[#e6fff2] py-20 text-gray-800 px-4">
      {/* Tiffin Types */}
      <section className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-2 cursor-pointer" onClick={goToContact}>Our Menu</h2>
        <p className="text-gray-600 text-lg mb-12">
          Fresh, varied, and delicious meals planned for every day of the week
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {tiffins.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all"
            >
              <h3 className={`text-lg font-bold text-${item.color}-600 mb-2`}>{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
                  <FaPepperHot /> {item.spice}
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center gap-1">
                  <FaFire /> {item.calories} cal
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Menu Thali Section */}
      <section className="py-20 bg-[#fffaf0] text-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Weekly Tiffin Menu</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Enjoy freshly cooked homestyle meals with our curated daily menus — crafted to satisfy your taste and nutrition needs every day of the week.
          </p>

          {/* LUNCH SECTION */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#b45309] mb-6">Lunch Menu</h3>
            <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
              {lunchMenu.map((item, i) => (
                <Link href="/pricing" key={`lunch-${i}`} className="group">
                  <div className="overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 duration-500 bg-white">
                    <Image
                      src={item.image}
                      alt={`Lunch - ${item.day}`}
                      width={500}
                      height={300}
                      className="object-cover w-full h-60"
                    />
                    <div className="p-4 text-left">
                      <h4 className="text-lg font-semibold text-[#b45309]">{item.day}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* DINNER SECTION */}
          <div>
            <h3 className="text-2xl font-semibold text-[#b45309] mb-6">Dinner Menu</h3>
            <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
              {dinnerMenu.map((item, i) => (
                <Link href="/pricing" key={`dinner-${i}`} className="group">
                  <div className="overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 duration-500 bg-white">
                    <Image
                      src={item.image}
                      alt={`Dinner - ${item.day}`}
                      width={500}
                      height={300}
                      className="object-cover w-full h-60"
                    />
                    <div className="p-4 text-left">
                      <h4 className="text-lg font-semibold text-[#b45309]">{item.day}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

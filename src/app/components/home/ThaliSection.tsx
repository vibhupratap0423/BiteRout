'use client';
import Image from 'next/image';
import Link from 'next/link';

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

export default function WeeklyTiffinSection() {
  return (
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
              <Link href="/menu" key={`lunch-${i}`} className="group">
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
              <Link href="/menu" key={`dinner-${i}`} className="group">
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
  );
}

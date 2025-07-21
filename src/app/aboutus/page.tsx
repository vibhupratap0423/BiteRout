import { FaUsers, FaHeart, FaShieldAlt, FaHandshake } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="py-20 bg-[linear-gradient(to_right,#fff1dc,#e6ffee)] text-gray-800">
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start mb-20">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-center md:text-left text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-center md:text-left mb-8 text-gray-700">
            Born from a passion for authentic home-style cooking and a desire to
            bring families together through food.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            A Family Tradition
          </h3>
          <p className="mb-4 leading-relaxed text-gray-700">
            Started in 2018 by us, Homely Tiffin began as a small
            kitchen operation serving just 10 customers. What started as a way
            to share our grandmother recipes has grown into a trusted service
            for over 500 families across the city.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            Every recipe we use has been passed down through three generations,
            ensuring that each meal carries the authentic taste of traditional
            Indian home cooking. We believe that food is not just nourishment
            for the body, but also for the soul.
          </p>

          <div className="flex items-center gap-3 mt-4 text-sm font-medium">
            <FaUsers className="text-orange-600 text-xl" />
            <div>
              <p className="font-bold text-black">500+ Happy Families</p>
              <p className="text-gray-600 text-sm">
                Serving delicious meals daily
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image Card */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl w-full h-[450px] md:h-[500px]"
          style={{
            backgroundImage: "url('/aboutus.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Mission & Values Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Our Mission & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Quality First */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-100 text-orange-600 rounded-full p-4 text-3xl mb-4">
                <FaHeart />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on the quality of ingredients or the love that goes into preparing each meal.
              </p>
            </div>

            {/* Hygiene Standards */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 text-green-600 rounded-full p-4 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Hygiene Standards
              </h3>
              <p className="text-gray-600">
                Our kitchen follows strict hygiene protocols and is regularly inspected to ensure food safety.
              </p>
            </div>

            {/* Customer Care */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Customer Care
              </h3>
              <p className="text-gray-600">
                We treat every customer like family and are always ready to customize meals according to your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaHeart, FaLeaf, FaClock } from 'react-icons/fa';

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Why Choose <span className="text-red-600">BiteRout</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <FaHeart className="text-red-600 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Made with Love</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Every meal is prepared with care using traditional recipes passed down through generations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <FaLeaf className="text-yellow-700 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fresh & Healthy</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              We use only the freshest ingredients and maintain the highest hygiene standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaClock className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">On-Time Delivery</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Reliable delivery service ensuring your meals reach you fresh and on time, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

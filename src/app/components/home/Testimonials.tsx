import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section className="py-20 bg-yellow-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-yellow-200 text-red-600 font-bold w-10 h-10 flex items-center justify-center rounded-full">
                P
              </div>
              <div>
                <p className="font-semibold">Priya Sharma</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
           <p className="mb-4 text-gray-700">
  &ldquo;The food tastes exactly like my mom cooking. As a working professional, this service has been a lifesaver. Highly recommended&rdquo;
</p>

            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-pink-100 text-red-600 font-bold w-10 h-10 flex items-center justify-center rounded-full">
                R
              </div>
              <div>
                <p className="font-semibold">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
           <p className="mb-4 text-gray-700">
  &ldquo;Affordable, delicious, and always on time. The variety in the menu keeps me excited for every meal&rdquo;
</p>

            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

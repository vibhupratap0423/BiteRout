'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-300 text-gray-700 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand Logo + Description */}
        <div className="flex flex-col items-start ">
          <Image
            src="/footerlogoo.png"
            alt="BiteRout Logo"
            width={180}
            height={40}
            className="object-contain"
          />
          <p className="text-sm font-medium text-gray-800">
            Delicious homemade tiffin delivered fresh daily. Perfect for students, working professionals & families.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md text-yellow-200 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-white">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/menu" className="hover:underline">Menu</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/aboutus" className="hover:underline">About Us</a></li>
            <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md text-yellow-200 font-semibold mb-2">Contact</h3>
          <p className="text-sm text-white">📍 New Delhi, India</p>
          <p className="text-sm text-white">📞 +91-9211062253 / 9211062254</p>
          <p className="text-sm text-white">✉️ biterout5@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="text-center text-xs py-4 bg-gray-200 text-gray-600">
        &copy; {new Date().getFullYear()} BiteRout. All rights reserved.
      </div>
    </footer>
  );
}

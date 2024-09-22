"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
        {/* Company Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Soil-Farming-Agent</h2>
          <p>
            Empowering farmers with data-driven insights to optimize soil health
            and enhance crop yields for sustainable agriculture.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center">
            <Mail className="mr-2" /> soilfarmingagent@gmail.com
          </p>
          <p className="flex items-center mt-2">
            <Phone className="mr-2" /> +123 456 7890
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-gray-400">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-200 pt-4 text-sm text-gray-300">
        © 2024 Soil-Farming-Agent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

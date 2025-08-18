import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between">
        {/*  Info */}
        <div className="mb-6 md:mb-0">
          <Link to="/">
            <h1 className="text-3xl font-bold text-white">
              <span className="font-serif text-red-500 text-4xl">T</span>echHub
            </h1>
          </Link>
          <p className="mt-4 text-sm">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-3 text-sm">Address: Ho Chi Minh City, Vietnam</p>
          <p className="mt-1 text-sm">Email: techhub@gmail.com</p>
          <p className="mt-1 text-sm">Phone: (+84) 123-456-789</p>
        </div>
        {/* Customer Service Link */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold uppercase">Customer Service</h3>
          <ul className="mt-7 text-sm space-y-2">
            <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-red-500 cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-red-500 cursor-pointer">FAQs</li>
            <li className="hover:text-red-500 cursor-pointer">
              Order Tracking
            </li>
            <li className="hover:text-red-500 cursor-pointer">Size Guide</li>
          </ul>
        </div>
        {/* Social media links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold uppercase">Follow Us</h3>
          <div className="flex space-x-3 mt-6 cursor-pointer">
            <Facebook className="w-[20px] h-[20px] hover:text-red-500" />
            <Instagram className="w-[20px] h-[20px] hover:text-red-500" />
            <Twitter className="w-[20px] h-[20px] hover:text-red-500" />
            <Linkedin className="w-[20px] h-[20px] hover:text-red-500" />
          </div>
        </div>
        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold uppercase">Stay in the Loop</h3>
          <p className="mt-7 text-sm">
            Subscribe to get special offers, free giveaways, and more
          </p>
          <form action="" className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md text-gray-200 border border-gray-600"
            />
            <button
              type="submit"
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Bottom section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        <p className="italic">
          &copy; 2025
          <span className="text-red-500"> TechHub</span>. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

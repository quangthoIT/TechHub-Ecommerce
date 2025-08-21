import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About TechHub</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-500">TechHub</span>
          , your one-stop destination for the latest and greatest in
          electronics. From cutting-edge gadgets to must-have accessories, we’re
          here to power up your tech life with premium products and unbeatable
          service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-500">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At TechHub, our mission is to make innovative technology accessible
            to everyone. We’re passionate about connecting people with the tools
            and tech they need to thrive in a digital world — all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-500">
            Why Choose TechHub?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Premium electronics from trusted global brands</li>
            <li>Ultra-fast, secure delivery to your door</li>
            <li>Dedicated customer support, anytime you need</li>
            <li>Easy returns for a stress-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-500">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We see a future where technology seamlessly empowers everyday life.
            At TechHub, we lead with innovation — delivering solutions that are
            practical, accessible, and always ahead of the curve.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-500 mb-2">
            Join the TechHub Family
          </h3>
          <p className="text-gray-700 mb-4">
            Whether you’re a tech explorer, a driven professional, or simply
            searching for something smart and stylish — TechHub is built for
            you.
          </p>
          <Link to={"/products"}>
            <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition duration-300 cursor-pointer">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

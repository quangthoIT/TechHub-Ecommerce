const Contact = () => {
  return (
    <div className="min-h-[93vh] bg-gray-100 flex justify-center items-center">
      <div className="backdrop-blur-md bg-white border border-gray-100 rounded-2xl shadow-2xl p-12 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-10">
          Get in Touch with <span className="text-red-500">TechHub</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="text-gray-700 space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-500">
                Have a question or need support? We're here to help you with
                your electronics journey.
              </p>
            </div>
            <div>
              <p>
                <strong>Address:</strong> Ho Chi Minh City, Vietnam
              </p>
              <p>
                <strong>Email:</strong> techhub@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> (+84) 123-456-789
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-200 text-gray-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="user@example.com"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-200 text-gray-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-200 text-gray-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

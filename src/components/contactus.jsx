import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white">
      <header className="bg-blue-700 text-white text-center py-8">
        <h1 className="text-3xl font-bold mt-8">Contact Us</h1>
      </header>
      <section className="text-center py-8 px-4">
        <h2 className="text-xl font-bold">Get In Touch</h2>
        <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
          We are here to help you. Reach out to us via any of the following methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-lg font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2">+1 123 456 7890</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-lg font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2">contact@wisedoctors.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-lg font-bold">Visit Us</h3>
            <p className="text-gray-700 mt-2">123 Health St, Wellness City</p>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-8 px-4">
        <h2 className="text-xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full mt-2 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;

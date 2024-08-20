import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg max-w-xl mx-auto mb-8">We would love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 border rounded-lg" type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 border rounded-lg" type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg" id="message" name="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

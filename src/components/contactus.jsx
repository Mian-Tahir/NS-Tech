import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#f4f7fd] flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-12 mx-4 sm:mx-8 md:mx-12 lg:mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Section */}
          <div>
            <h1 className="text-5xl font-extrabold text-[#333] mb-6">Let's Talk</h1>
            <p className="text-lg text-gray-600 mb-8">
              Have a big idea or brand to develop and need help? Reach out—we'd love to hear about your project and provide assistance.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-[#333] mb-4">Email</h2>
              <ul>
                <li className="flex items-center mb-4">
                  <div className="bg-[#e6e6e6] h-14 w-14 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 2l-7 5-7-5V6l7 5 7-5v2zm-7 5l7-5v10H4V6l7 5z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:example@gmail.com"
                    className="text-[#007bff] text-lg ml-4"
                  >
                    <strong>example@gmail.com</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-[#333] mb-4">Phone</h2>
              <ul>
                <li className="flex items-center mb-4">
                  <div className="bg-[#e6e6e6] h-14 w-14 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15.6l-3.2-3.2c-1.1-1.1-2.7-1.3-3.9-.8l-1.1.5c-.4.2-.7.5-1 .8-.2.2-.4.4-.7.6-1.6 1.6-3.6 2.7-5.7 3.2-1.2.3-2.5-.3-3.2-1.4l-2.1-2.1c-.9-.9-1.7-2-1.5-3.1.6-3.1 2.1-5.9 4.3-8.2 1.6-1.6 3.6-2.7 5.7-3.2 1.1-.3 2.4.2 3.1 1.2l2.1 2.1c.7.7 1.5 1.4 2.4 2l.8.8c.3.4.5.7.8 1.1l.5 1.1c.4 1.2.2 2.8-1.1 3.9z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+1234567890"
                    className="text-[#007bff] text-lg ml-4"
                  >
                    <strong>+1 (234) 567-890</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#333] mb-4">Location</h2>
              <ul>
                <li className="flex items-center mb-4">
                  <div className="bg-[#e6e6e6] h-14 w-14 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.5 7 11 7 11s7-5.5 7-11c0-3.9-3.1-7-7-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm-2-3c0-1.1.9-2 2-2s2 .9 2 2- .9 2-2 2-2-.9-2-2z" />
                    </svg>
                  </div>
                  <span className="text-[#007bff] text-lg ml-4">
                    <strong>123 Main Street, Anytown, USA</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#333] mb-4">Socials</h2>
              <ul className="flex space-x-6">
                <li className="bg-[#e6e6e6] h-14 w-14 rounded-full flex items-center justify-center">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.023 3.633 9.164 8.4 10.666V15.688h-2.5v-3.25h2.5v-2.4c0-2.48 1.51-3.83 3.56-3.83.977 0 1.82.072 2.066.104v2.386h-1.41c-1.1 0-1.54.655-1.54 1.485v1.764h3.1l-.406 3.25h-2.694V22.67C17.367 21.16 21 16.02 21 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#e6e6e6] h-14 w-14 rounded-full flex items-center justify-center">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.34-1.58.57-2.45.67.88-.53 1.56-1.38 1.88-2.4-.82.49-1.73.84-2.7 1.03-.77-.83-1.87-1.35-3.08-1.35-2.33 0-4.22 1.89-4.22 4.22 0 .33.03.65.1.95-3.51-.18-6.62-1.85-8.71-4.41-.36.62-.57 1.34-.57 2.11 0 1.46.74 2.74 1.86 3.49-.68-.02-1.32-.21-1.89-.52v.05c0 2.03 1.44 3.73 3.35 4.12-.35.1-.72.15-1.09.15-.27 0-.53-.03-.79-.07.53 1.65 2.08 2.85 3.92 2.89-1.43 1.12-3.23 1.78-5.18 1.78-.34 0-.67-.02-1-.07 1.87 1.2 4.08 1.89 6.46 1.89 7.74 0 11.98-6.42 11.98-11.98 0-.18-.01-.35-.02-.53.82-.59 1.53-1.32 2.1-2.16z" />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#e6e6e6] h-14 w-14 rounded-full flex items-center justify-center">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h18v18H3V3zm14.5 14.5h-2.5v-5.4c0-1.3-.5-2.2-1.5-2.2-.8 0-1.3.5-1.5 1.1-.1.2-.1.5-.1.8v5.7H8v-5.9c0-2.1-1.1-3.2-2.6-3.2-1.2 0-2.2.8-2.6 1.8-.1.2-.1.5-.1.8v5.5H2v-9h2.3v1.2c.5-.7 1.3-1.1 2.2-1.1 1.7 0 2.9 1 2.9 2.8v5.2h2.5v-.1zm2.8-4.2c0 .6-.1 1.1-.3 1.5-.2.4-.5.7-.9 1-.5.5-1.1.8-1.8.8-.7 0-1.4-.3-1.8-.8-.2-.4-.3-.9-.3-1.5v-5.4h2.5c.7 0 1.3.6 1.3 1.3v3.2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section (Form) */}
          <form action="" className="space-y-8">
            <div className="relative">
              <input
                type="text"
                className="block w-full px-6 py-4 text-lg bg-[#f4f7fd] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent"
                placeholder="Name"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                className="block w-full px-6 py-4 text-lg bg-[#f4f7fd] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent"
                placeholder="Email"
                required
              />
            </div>
            <div className="relative">
              <textarea
                className="block w-full px-6 py-4 text-lg bg-[#f4f7fd] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent"
                placeholder="Message"
                required
                rows="4"
              ></textarea>
            </div>
            <button
              className="px-8 py-4 text-lg font-bold text-white bg-[#007bff] hover:bg-[#0056b3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

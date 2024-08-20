import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="https://your-new-link-here.com/" className="flex justify-center lg:justify-start">
              <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG content here */}
              </svg>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul>
              <li><a href="/web-development" className="text-gray-600 hover:text-gray-900">Web Development</a></li>
              <li><a href="/design" className="text-gray-600 hover:text-gray-900">Design</a></li>
              <li><a href="/seo" className="text-gray-600 hover:text-gray-900">SEO</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Social</h3>
            <ul>
              <li><a href="https://twitter.com/your-twitter" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
              <li><a href="https://facebook.com/your-facebook" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              <li><a href="https://linkedin.com/company/your-linkedin" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import logo from "../../public/logo.jpg";

// Reusable ListItem component for quick links and social icons
const ListItem = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-all">
      {children}
    </a>
  </li>
);

// Reusable SocialIcon component for social media icons
const SocialIcon = ({ href, ariaLabel, path }) => (
  <a href={href} aria-label={ariaLabel} className="hover:text-blue-700 dark:hover:text-blue-500 transition-all">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d={path} />
    </svg>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Company logo" className="h-40 w-auto" />
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
          <div>
            <h2 className="text-gray-900 dark:text-white text-xl font-semibold mb-4 text-left">Quick Links</h2>
            <ul className="space-y-2 text-left">
              <ListItem href="#">Home</ListItem>
              <ListItem href="#">About Us</ListItem>
              <ListItem href="#">Services</ListItem>
              <ListItem href="#">Our Team</ListItem>
              <ListItem href="#">Contact Us</ListItem>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-900 dark:text-white text-xl text-left font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2 text-left">
              <ListItem href="#" ariaLabel="GitHub">GitHub</ListItem>
              <ListItem href="#" ariaLabel="LinkedIn">LinkedIn</ListItem>
              <ListItem href="#" ariaLabel="Twitter">Twitter</ListItem>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-900 dark:text-white text-xl text-left font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-left">
              <ListItem href="#">About</ListItem>
              <ListItem href="#">Privacy Policy</ListItem>
              <ListItem href="#">Terms & Conditions</ListItem>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-600" />

      <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-sm">
        <div className="flex space-x-5">
          <SocialIcon 
            href="#" 
            ariaLabel="Facebook"
            path="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"
          />
          <SocialIcon 
            href="#" 
            ariaLabel="YouTube"
            path="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458 0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z"
          />
          <SocialIcon 
            href="#" 
            ariaLabel="Instagram"
            path="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
          />
        </div>

        <p className="text-black dark:text-gray-400 text-sm">© YourCompanyName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

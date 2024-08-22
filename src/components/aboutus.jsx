import React from 'react';

const AboutUs = () => {
  return (
    <div className="sm:flex items-center  max-w-screen-xl mx-auto py-20">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" className="w-full h-auto max-w-lg mx-auto" />
        </div>
      </div>
      <div className="sm:w-1/2 p-10">
        <div className="text">
          <span className="text-gray-500 border-b-4 border-indigo-600 uppercase text-lg">About us</span>
          <h2 className="my-6 font-bold text-4xl sm:text-5xl">
            About <span className="text-indigo-600">NS Tech</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
            doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
            voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import video from "../../public/home video.mp4";

const Home = () => {
  return (
    <section id="home" className="bg-gray-800 h-full flex justify-center items-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Home;

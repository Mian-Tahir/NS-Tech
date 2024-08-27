import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Software Engineer',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Graphic Designer',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Alex Johnson',
    role: 'Marketing Manager',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Peter Johnson',
    role: 'SEO Specialist',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Emily Brown',
    role: 'UX Designer',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Michael Davis',
    role: 'Frontend Developer',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'Content Writer',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'David Wilson',
    role: 'Project Manager',
    imgSrc: '../../public/pic.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const OurTeam = () => {
  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 my-6 text-center group relative">
              <div className="relative">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full rounded-full mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a href={member.social.facebook} className="text-white text-lg">
                      <FaFacebookF />
                    </a>
                    <a href={member.social.linkedin} className="text-white text-lg">
                      <FaLinkedinIn />
                    </a>
                    <a href={member.social.instagram} className="text-white text-lg">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

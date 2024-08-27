import React from 'react';

const Services = () => {
  return (
    <div className="py-20 bg-gray-100 mt-20">  
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <h2 className="text-3xl font-bold text-black text-center mb-10">Our Services</h2>
        <div className="mx-auto grid gap-8 md:w-3/4 lg:w-full lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-xl px-4 py-8 sm:px-6 lg:px-4 transition-transform transform hover:bg-blue-500 hover:scale-105 hover:text-white">
            <div className="mb-6 space-y-4">
              <h3 className="text-xl font-semibold text-black">Graphic Design</h3>
              <p className="mb-4">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
              <a href="#" className="block font-medium text-blue-600 hover:text-white">Know more</a>
            </div>
            <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" className="w-2/3 ml-auto -mb-10" alt="illustration" loading="lazy" width="900" height="600" />
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-4 py-8 sm:px-6 lg:px-4 transition-transform transform hover:bg-blue-300 hover:scale-105 hover:text-white">
            <div className="mb-6 space-y-4">
              <h3 className="text-xl font-semibold text-black">UI Design</h3>
              <p className="mb-4">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
              <a href="#" className="block font-medium text-blue-600 hover:text-white">Know more</a>
            </div>
            <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-4 py-8 sm:px-6 lg:px-4 transition-transform transform hover:bg-blue-500 hover:scale-105 hover:text-white">
            <div className="mb-6 space-y-4">
              <h3 className="text-xl font-semibold text-black">UX Design</h3>
              <p className="mb-4">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
              <a href="#" className="block font-medium text-blue-600 hover:text-white">Know more</a>
            </div>
            <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

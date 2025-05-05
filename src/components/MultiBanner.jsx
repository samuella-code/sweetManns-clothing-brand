
import React from 'react';

const MultiBanner = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* First Banner */}
        <div className="relative h-[250px] group">
          <img
            src="https://images.pexels.com/photos/26601197/pexels-photo-26601197/free-photo-of-t-shirts-on-a-rack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="New Arrivals"
            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">New Arrivals</h2>
            <button className="mt-2 px-4 py-2 bg-white text-green-800 rounded-full shadow hover:bg-gray-200 transition-all duration-300">
              Discover
            </button>
          </div>
        </div>

        {/* Second Banner */}
        <div className="relative h-[250px] group">
          <img
            src="https://images.pexels.com/photos/7564170/pexels-photo-7564170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Limited Offer"
            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Limited Offer</h2>
          </div>
        </div>

        {/* Third Banner */}
        <div className="relative h-[250px] col-span-1 sm:col-span-2 group">
          <img
            src="https://images.pexels.com/photos/5868736/pexels-photo-5868736.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Season Sale"
            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-yellow-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center">
            <h2 className="text-white text-4xl font-bold">Season Sale</h2>
            <p className="text-white my-2 text-lg">Up to 70% Off</p>
            <button className="text-white bg-yellow-600 px-4 py-2 hover:bg-yellow-500 rounded-full shadow transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Fourth Banner */}
        <div className="relative h-[250px] col-span-1 sm:col-span-2 group">
          <img
            src="https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Season Sale"
            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-orange-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center">
            <h2 className="text-white text-4xl font-bold">Season Sale</h2>
            <p className="text-white my-2 text-lg">Up to 70% Off</p>
            <button className="text-white bg-red-500 px-4 py-2 hover:bg-red-600 rounded-full shadow transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Fifth Banner */}
        <div className="relative h-[250px] group">
          <img
            src="https://images.pexels.com/photos/1884579/pexels-photo-1884579.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Limited Offer"
            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Limited Offer</h2>
          </div>
        </div>

        {/* Sixth Banner */}
        <div className="relative h-[250px] group">
          <img
            src="https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="New Arrivals"
            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">New Arrivals</h2>
            <button className="mt-2 px-4 py-2 bg-white text-green-800 rounded-full shadow hover:bg-gray-200 transition-all duration-300">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiBanner;
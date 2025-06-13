import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewCollection = () => {
  const { new_collections } = useContext(Shopcontext);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:pt-24 lg:max-w-7xl lg:px-8">
        {/* Title */}
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 text-center font-serif">
          New Collection
        </h2>
        <p className="text-center mt-4 text-lg text-gray-700 md:px-56">
          Step into a world of timeless fashion with our latest collection! Designed for those who dare to shine, this collection blends sophistication, comfort, and trendsetting designs to redefine your wardrobe.
        </p>

        {/* Swiper for Mobile & Tablet */}
        <div className="block lg:hidden mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {new_collections.map((product) => (
              <SwiperSlide key={product.id}>
                <Item product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden lg:grid mt-12 grid-cols-1 gap-x-6 gap-y-10 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {new_collections.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;

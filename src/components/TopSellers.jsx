import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import Item from './Item';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopSellers = () => {
  const { all_product } = useContext(Shopcontext);
  const topSellers = all_product.slice(0, 20);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif">
        Top Sellers
      </h2>
      <p className="text-center mt-3 md:px-56">
        Step into confidence with our best-selling pieces! These fan-favorite designs are the perfect blend of trend, comfort, and luxury, making them wardrobe essentials for fashion lovers everywhere.
      </p>

      {/* Swiper for Mobile and Tablet */}
      <div className="block lg:hidden mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {topSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <Item product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden lg:grid mt-10 grid-cols-1 gap-x-6 gap-y-10 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {topSellers.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;

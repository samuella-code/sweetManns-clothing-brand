import React, { useContext } from "react";
import { Shopcontext } from "../Context/ShopContext";
import Item from "../components/Item";
import banner from "../assets/rrr2.jpg";
import AppLayout from "../components/layout/app";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Kids = () => {
  const { all_product } = useContext(Shopcontext);
  const kidProducts = all_product.filter(
    (product) => product.category === "kid"
  );

  return (
    <AppLayout>
      <div className="max-w-8xl mx-auto">
        {/* Banner */}
        <div className="w-screen h-[300px] md:h-[400px] overflow-hidden rounded-b-[50px] shadow-lg">
          <img
            src={banner}
            alt="Kids Collection Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kids Collection */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">
            SweatShirts Collection
          </h2>

          {/* Swiper for Mobile/Tablet */}
          <div className="block lg:hidden mt-6">
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
              {kidProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <Item product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden lg:grid mt-6 grid-cols-1 gap-x-6 gap-y-10 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {kidProducts.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Kids;

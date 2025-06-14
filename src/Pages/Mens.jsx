import React, { useContext } from "react";
import { Shopcontext } from "../Context/ShopContext";
import Item from "../components/Item";
import banner from "../assets/vid2.mp4";
import AppLayout from "../components/layout/app";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Mens = () => {
  const { all_product } = useContext(Shopcontext);
  const menProducts = all_product.filter(
    (product) => product.category === "men"
  );

  return (
    <AppLayout>
      <div className="max-w-8xl mx-auto">
        {/* Video Banner */}
        <div className="w-screen h-[300px] md:h-[400px] overflow-hidden">
          <video
            src={banner}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Men's Collection Section */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">
            Men's Collection
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
              {menProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <Item product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden lg:grid mt-6 grid-cols-1 gap-x-6 gap-y-10 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {menProducts.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Mens;

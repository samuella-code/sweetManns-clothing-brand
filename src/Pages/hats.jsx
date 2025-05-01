import React, { useContext } from "react";
import { Shopcontext } from "../Context/ShopContext";
import Item from "../components/Item";
import bannerVideo from "../assets/vid3.mp4";
import AppLayout from "../components/layout/app";

function Hats() {
  const { all_product } = useContext(Shopcontext);
  const womenProducts = all_product.filter(
    (product) => product.category === "women"
  );

  return (
    <AppLayout>
      <div className="md:mt-32 mt-20 max-w-8xl mx-auto">
        {/* Video Banner */}
        <div className="w-screen h-[300px] md:h-[400px] overflow-hidden">
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Women's Collection Section */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">
            Women's Collection
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {womenProducts.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Hats;

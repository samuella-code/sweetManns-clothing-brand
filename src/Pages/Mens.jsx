// import React, { useContext } from 'react'
// import { Shopcontext } from '../Context/ShopContext'
// import Item from '../components/Item'
// import banner from '../assets/vid1.jpg'

// const Mens = () => {
//   const {all_product} = useContext(Shopcontext)
//   const menProducts = all_product.filter((product) => product.category === "men")
//   return (
//     <div className='md:mt-32 mt-20 max-w-7xl mx-auto'>
//       <div>
//         <img src={banner} alt="" className='w-screen px-6'/>
//       </div>
//       <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
//         <h2 className='text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start'>Men's Collection</h2>
//         <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
//           {
//              menProducts.map((product)=> {
//               return <Item key={product.id} product={product} />
//              })
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Mens

import React, { useContext } from "react";
import { Shopcontext } from "../Context/ShopContext";
import Item from "../components/Item";
import banner from "../assets/vid2.mp4";
import AppLayout from "../components/layout/app";

const Mens = () => {
  const { all_product } = useContext(Shopcontext);
  const menProducts = all_product.filter(
    (product) => product.category === "men"
  );

  return (
    <AppLayout>
      <div className="md:mt-32 mt-20 max-w-8xl mx-auto">
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

        <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">
            Men's Collection
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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

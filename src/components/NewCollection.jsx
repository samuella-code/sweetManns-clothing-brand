// import React, { useContext } from 'react'
// import { Shopcontext } from '../Context/ShopContext'
// import Item from './Item'

// const NewCollection = () => {
//     const {new_collections} = useContext(Shopcontext)
//   return (
//     <div>
//         <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
//             <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>New Collection</h2>
//             <p className='text-center mt-3 md:px-56'>
// Step into a world of timeless fashion with our latest collection! Designed for those who dare to shine, this collection blends sophistication, comfort, and trendsetting designs to redefine your wardrobe.</p>
//             <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
//                 {new_collections.map((product) => {
//                     return <Item key={product.id} product={product}/>
//                 })}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default NewCollection

import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import Item from './Item';

const NewCollection = () => {
  const { new_collections } = useContext(Shopcontext);
  

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:pt-24 lg:max-w-7xl lg:px-8">
        {/* Title Section */}
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 text-center font-serif">
          New Collection
        </h2>
        <p className="text-center mt-4 text-lg text-gray-700 md:px-56">
          Step into a world of timeless fashion with our latest collection! Designed for those who dare to shine, this collection blends sophistication, comfort, and trendsetting designs to redefine your wardrobe.
        </p>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {new_collections.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
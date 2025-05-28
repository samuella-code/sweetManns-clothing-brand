// import React from 'react'
// import { Link } from 'react-router-dom'

// const Item = ({product}) => {
//   return (
//     <div className='group relative'>
//       <Link to={`/products/${product.id}`}>
//         <div onClick={window.scrollTo(0,0)} className='aspect-h-1 aspect-w-1w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-96'>
//             <img src={product.image} alt={product.name} className='h-full w-full object-cover object-center' />
//         </div>
//       </Link>
//       <div className='mt-4 flex justify-between'>
//         <div>
//             <h3 className='text-sm text-gray-700'>
//                 <Link to={`/products/${product.id}`}>
//                 <span aria-hidden="true" className=' inset-0'>{product?.name}</span>
//                 </Link>
//             </h3>
//         </div>
//         <p className='text-sm font-medium text-gray-900'>${product?.new_price}</p>
//       </div>
//     </div>
//   )
// }

// export default Item

import React from "react";
import { Link } from "react-router-dom";
import useCart from "../hook/useCart";

const Item = ({ product }) => {
  const { addToCart, removeFromCart, carts } = useCart();
  return (
    <div className="group relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link
        to={`/products/${product.id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-100 lg:aspect-none lg:h-80 h-96">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-200">
          <Link to={`/products/${product.id}`}>{product?.name}</Link>
        </h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-900">
            ${product?.new_price}
          </p>
          {carts.find((item) => item.id === product.id) ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  removeFromCart(product);
                }}
                className="bg-gray-200 size-7 rounded flex items-center justify-center"
              >
                -
              </button>
              <p className="text-sm font-medium text-gray-900">
                {carts.find((item) => item.id === product.id).count}
              </p>
              <button
                onClick={() => {
                  addToCart(product);
                }}
                className="bg-gray-200 size-7 rounded flex items-center justify-center"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="text-xs bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded-full transition-all duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;

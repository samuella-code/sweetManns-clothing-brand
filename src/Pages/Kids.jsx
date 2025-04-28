// import React, { useContext } from 'react'
// import { Shopcontext } from '../Context/ShopContext'
// import Item from '../components/Item'
// import banner from '../assets/rrr2.jpg'

// const Kids = () => {
//   const {all_product} = useContext(Shopcontext)
//   const kidProducts = all_product.filter((product) => product.category === "kid")
//   return (
//     <div className='md:mt-32 mt-20 max-w-7xl mx-auto'>
//     <div>
//       <img src={banner} alt="" className='w-screen px-6' />
//     </div>
//     <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
//       <h2 className='text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start'>Kid's Collection</h2>
//       <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
//         {
//           kidProducts.map((product) => {
//             return <Item key={product.id} product={product} />
//           })
//         }
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Kids

import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from '../components/Item'
import banner from '../assets/rrr2.jpg' // Import the image

const Kids = () => {
  const { all_product } = useContext(Shopcontext)
  const kidProducts = all_product.filter((product) => product.category === "kid")

  return (
    <div className='md:mt-32 mt-20 max-w-8xl mx-auto'>
     
      <div className="w-screen h-[300px] md:h-[400px] overflow-hidden rounded-b-[50px] shadow-lg">
        <img 
          src={banner} 
          alt="Kids Collection Banner" 
          className="w-full h-full object-cover"
        />
      </div>

   
      <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start'>
          SweatShirts Collection
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            kidProducts.map((product) => (
              <Item key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Kids

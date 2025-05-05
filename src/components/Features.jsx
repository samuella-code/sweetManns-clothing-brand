// import React from 'react'
// import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

// const features = [
//     {icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100'},
//     {icon: Lock, text: 'Secure Payment', subtext: '100% protected payments'},
//     {icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
//     {icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service'},
// ]
// const Features = () => {

//   return (
//     <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
//             {features.map((feature, index)=> {
//                return <div key={index} className='flex items-center justify-center text-center sm:text-left'>
//                     <feature.icon className='flex-shrink-0 h-10 w-10 text-gray-600' aria-hidden="true" />
//                     <div className='ml-4'>
//                         <p className='text-base font-medium text-gray-900'>{feature.text}</p>
//                         <p className='mt-1 text-sm text-gray-500'>{feature.subtext}</p>
//                     </div>
//                 </div>
//             })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Features


import React from 'react';
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react';

const features = [
    { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100' },
    { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
    { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy' },
    { icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service' },
];

const Features = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Why Shop With Us?
                </h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <feature.icon
                                className="h-12 w-12 text-indigo-500 mb-4"
                                aria-hidden="true"
                            />
                            <p className="text-lg font-semibold text-gray-900">
                                {feature.text}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                {feature.subtext}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
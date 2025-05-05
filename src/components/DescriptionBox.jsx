import React, { useState } from 'react';
const DescriptionBox = () => {
    const [activeTab, setActiveTab] = useState('description'); // State to toggle between tabs
    const reviews = [
        "This outfit is amazing! The quality is top-notch.",
        "I love the design and the fit is perfect.",
        "Great value for the price. Highly recommend!",
        "The material is so soft and comfortable.",
        "I received so many compliments wearing this!",
        "Fast delivery and excellent customer service.",
        "Absolutely love it! Will buy again."
    ];

    return (
        <div className="px-6 md:px-0">
            {/* Tabs */}
            <div className="flex">
                <div
                    onClick={() => setActiveTab('description')}
                    className={`cursor-pointer border border-gray-400 font-semibold p-4 ${
                        activeTab === 'description' ? 'bg-gray-200' : ''
                    }`}
                >
                    Description
                </div>
                <div
                    onClick={() => setActiveTab('reviews')}
                    className={`cursor-pointer border border-gray-400 font-semibold p-4 ${activeTab === 'reviews' ? 'bg-gray-200' : ''
}`}
>
Reviews ({reviews.length})
</div>
</div>

{/* Content */}
<div className="border border-gray-400 p-8 bg-gray-50">
{activeTab === 'description' ? (
<p className="text-gray-700 leading-relaxed">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam saepe vero, accusantium similique sed eligendi consequuntur magni dolores, quam quod minus unde possimus numquam harum, amet necessitatibus sunt deleniti autem non nobis cumque debitis! Ratione hic, culpa consectetur repudiandae ipsum reprehenderit excepturi et maiores quasi voluptates dolores, iste soluta inventore odio voluptate ab itaque eos dignissimos. Vel nihil, eos architecto iusto iure doloribus ipsa aliquam quasi unde labore reiciendis deleniti eaque perferendis omnis. Dolorem doloribus aut aliquid ea vero mollitia minima pariatur eum, fuga animi sequi veritatis ut recusandae maiores optio, nihil exercitationem temporibus ab accusamus cumque amet qui earum!
</p>
) : (
<div className="space-y-4">
    {reviews.map((review, index) => (
        <div
            key={index}
            className="p-4 border border-gray-300 rounded-md bg-white shadow-sm"
        >
            <p className="text-gray-800">{review}</p>
        </div>
    ))}
</div>
)}
</div>
</div>
);
};

export default DescriptionBox;
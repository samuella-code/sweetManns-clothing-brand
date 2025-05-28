import { Star } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shopcontext } from "../Context/ShopContext";
import useCart from "../hook/useCart";

const ProductDisplay = (props) => {
  const { product } = props;
  // const { addToCart } = useContext(Shopcontext);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const { addToCart: setCarts, carts, removeFromCart } = useCart();

  // console.log(product);

  const images = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 mb-20 md:gap-10">
      <div className="flex md:1/2 gap-4">
        <div className="flex flex-col gap-4 md:h-[500px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="md:h-[163px] w-[100px]"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <div>
          <img src={selectedImage} alt="" className="md:h-[580px]" />
        </div>
      </div>
      <div className="flex md:1/2 flex-col mt-8 md:mt-0">
        <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4">
          <Star fill="red" />
          <Star fill="red" />
          <Star fill="red" />
          <Star fill="red" />
          <Star fill="gray" />
          <p>(122)</p>
        </div>
        <div className="flex gap-5 font-semibold items-center my-5">
          <div className="text-gray-500 text-2xl line-through">
            ${product.old_price}
          </div>
          <div className="text-red-500 text-3xl">${product.new_price}</div>
        </div>

        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolore voluptatem nesciunt facere totam suscipit illum laboriosam
          nulla, corporis amet consequuntur, fugiat modi voluptate libero
        </div>
        <div>
          <h1 className="font-semibold text-gray-400 text-2xl mt-4">
            Select Size
          </h1>
          <div className="flex gap-4 items-center my-4">
            <div className="border bg-gray-100 p-4">S</div>
            <div className="border bg-gray-100 p-4">M</div>
            <div className="border bg-gray-100 p-4">L</div>
            <div className="border bg-gray-100 p-4">XL</div>
            <div className="border bg-gray-100 p-4">XXL</div>
          </div>
        </div>
        {carts.find((item) => item.id === product.id) ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                removeFromCart(product);
              }}
              className="bg-gray-200 px-4 py-2"
            >
              -
            </button>
            <p className="text-2xl">
              {carts.find((item) => item.id === product.id).count}
            </p>
            <button
              onClick={() => {
                setCarts(product);
              }}
              className="bg-gray-200 px-4 py-2"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => setCarts(product)}
            className="bg-red-500 text-white px-6 py-3 my-4 w-max"
          >
            ADD TO CART
          </button>
        )}
        <p>
          <span className="font-semibold">Category:</span> Women, T-shirt, Crop
          top
        </p>
        <p>
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

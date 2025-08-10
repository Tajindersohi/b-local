import React from "react";

function ProductCard({ title, image, price, onAddToCart }) {
  return (
    <div className="min-w-[220px] max-w-xs border border-gray-200 rounded-lg p-4 bg-white shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-[140px] object-contain rounded-md bg-gray-100 block"
      />
      <h3 className="text-base font-semibold mt-2 mb-1">{title}</h3>
      <div className="font-bold text-red-500 mb-2">₹{price}</div>
      <button
        className="bg-orange-600 text-white rounded px-4 py-2 cursor-pointer"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

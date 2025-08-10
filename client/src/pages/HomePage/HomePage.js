import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Home() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setProductList(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);
  function addToCart(product) {
    window.alert(`Added "${product.title}" to cart!`);
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {productList.map(item => (
          <ProductCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

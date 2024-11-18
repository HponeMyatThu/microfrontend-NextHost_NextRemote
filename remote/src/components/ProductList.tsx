import React from "react";
import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();

  if (typeof window === "undefined") {
    return null;
  }

  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => router.push(`/product/${product.id}`)}
        >
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

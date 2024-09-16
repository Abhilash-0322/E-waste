import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
        Turn Your Old Tech to Treasure
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        Welcome to the E-Waste Selling Platform!

We believe in a sustainable future, where electronic waste can be responsibly recycled, reused, or resold. With the rapid pace of technology, millions of devices become obsolete every year, contributing to the growing e-waste problem. Our platform is here to provide a simple and effective way for you to give your old electronics a second life.

Whether you're looking to sell your unused gadgets or purchase refurbished electronics, you've come to the right place. By participating in the e-waste economy, you're not only clearing out space but also contributing to a cleaner, greener planet.

Join us today and be part of the solution!
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;

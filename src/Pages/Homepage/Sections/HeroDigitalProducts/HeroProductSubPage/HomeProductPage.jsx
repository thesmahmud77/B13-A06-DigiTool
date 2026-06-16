import React, { useState, useEffect } from "react";
import { FiCheck } from "react-icons/fi";

const HomeProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow duration-300"
        >
          <span
            className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
              product.tagType === "best seller"
                ? "bg-amber-100 text-amber-700"
                : product.tagType === "popular"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {product.tag}
          </span>

          <div>
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-2.5 mb-4 shadow-sm">
              <img
                src={product.icon}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {product.name}
            </h3>

            <p className="text-slate-400 text-xs mb-4 leading-relaxed min-h-[32px]">
              {product.description}
            </p>

            <div className="text-2xl font-bold text-slate-900 mb-4">
              ${product.price}
              <span className="text-xs text-slate-400 font-normal ml-0.5">
                {product.period === "monthly"
                  ? "/Mo"
                  : product.period === "yearly"
                    ? "/Yr"
                    : "/One-Time"}
              </span>
            </div>

            <ul className="space-y-2.5 mb-6 text-sm text-slate-600">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FiCheck className="text-green-500 shrink-0" />
                  <span className="text-xs md:text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#8b2cf5] text-white py-3 rounded-xl font-medium text-sm cursor-pointer hover:bg-[#7622d6] transition-colors"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomeProductPage;

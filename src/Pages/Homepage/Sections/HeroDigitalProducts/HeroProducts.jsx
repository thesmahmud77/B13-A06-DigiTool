import React, { useState } from "react";
import HomeProductPage from "./HeroProductSubPage/HomeProductPage";
import CartPage from "./HeroProductSubPage/CartPage";
import Swal from "sweetalert2";

const HeroProducts = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      Swal.fire({
        title: "Product Already Added",
        text: "Please Check The Other Products",
        icon: "question",
      });
    }
    if (!isExist) {
      setCart([...cart, product]);
      Swal.fire({
        title: "Product Added To the Cart",
        icon: "success",
        draggable: true,
      });
    }
  };

  const removeFromCart = (id) => {
    const tempCart = [...cart];
    const index = tempCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      tempCart.splice(index, 1);
      setCart([...tempCart]);
      Swal.fire({
        title: "Product Remove Successfully",
        icon: "success",
        draggable: true,
      });
    }
  };

  return (
    <section className="bg-white py-16 px-6 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 tracking-tight">
            Premium Digital Tools
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          <div className="inline-flex items-center bg-slate-50 border border-slate-100 rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className={`font-medium px-8 py-2.5 rounded-full text-sm cursor-pointer transition-all ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-sm"
                  : "bg-transparent text-slate-600 hover:text-slate-800"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`font-medium px-8 py-2.5 rounded-full text-sm cursor-pointer transition-all ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-sm"
                  : "bg-transparent text-slate-600 hover:text-slate-800"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <HomeProductPage addToCart={addToCart}></HomeProductPage>
        ) : (
          <CartPage cart={cart} removeFromCart={removeFromCart}></CartPage>
        )}
      </div>
    </section>
  );
};

export default HeroProducts;

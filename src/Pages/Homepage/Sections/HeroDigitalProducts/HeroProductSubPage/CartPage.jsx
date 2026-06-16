import React from "react";

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto border border-dashed border-slate-200 rounded-2xl py-16 text-center bg-slate-50">
        <div className="text-4xl mb-3">🛒</div>
        <h3 className="text-lg font-bold text-slate-700 mb-1">
          Your Cart is Empty
        </h3>
        <p className="text-slate-400 text-sm">No product added yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto border border-slate-100 rounded-2xl p-6 shadow-sm bg-white">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center p-2.5 border border-slate-100">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">
                  {item.name}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm">
                  ${item.price}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-rose-500 hover:text-rose-700 font-medium text-xs md:text-sm cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <span className="text-slate-400 text-sm">Total:</span>
          <span className="text-2xl font-bold text-slate-900">
            ${totalPrice}
          </span>
        </div>

        <button className="w-full mt-6 bg-[#8b2cf5] text-white py-4 rounded-xl font-semibold text-sm cursor-pointer hover:bg-[#7622d6] transition-all text-center">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

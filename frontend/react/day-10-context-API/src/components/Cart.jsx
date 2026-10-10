
import React from "react";

const Cart = ({ cartItem = [] }) => {
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            You have {cartItem.length} items in your cart
          </p>
        </div>

        {cartItem.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <div className="text-6xl mb-4">🛒</div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Your cart is empty!
            </h2>

            <p className="text-gray-500 mt-2">
              Looks like you haven't added anything yet.
            </p>
          </div>
        ) : (
          /* Cart Products */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Product List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex flex-col sm:flex-row gap-5"
                >
                  {/* Product Image */}
                  <div className="h-40 w-full sm:w-36 shrink-0 bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
                        {item.category}
                      </p>

                      <h2 className="text-lg font-semibold text-gray-800 mt-2">
                        {item.title}
                      </h2>

                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <span className="text-amber-500">
                          ★ {item.rating?.rate ?? "N/A"}
                        </span>

                        <span>
                          ({item.rating?.count ?? 0} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xl font-bold text-gray-900">
                        ${Number(item.price).toFixed(2)}
                      </p>

                      <button
                        onClick={() =>
                          console.log("Remove product:", item.id)
                        }
                        className="text-sm font-medium text-red-500 hover:text-red-700 transition"
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit bg-white rounded-2xl p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Items ({cartItem.length})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-indigo-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => console.log("Proceed to checkout")}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold mt-6 hover:bg-indigo-700 active:scale-95 transition"
              >
                Proceed to Checkout →
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Secure checkout · Easy shopping
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

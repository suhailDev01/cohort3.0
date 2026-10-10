
import React from "react";

const ProductCard = ({ products,setCartItem }) => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-14 text-white">
          <p className="uppercase tracking-widest text-sm mb-3 text-indigo-100">
            Discover Your Style
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Find Products You'll Love
          </h2>

          <p className="text-indigo-100 max-w-xl mb-6">
            Explore our collection of fashion, jewellery and electronics
            at amazing prices.
          </p>

          <a
            href="#products"
            className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now →
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-5 pb-16"
      >
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-8">
          <div>
            <p className="text-indigo-600 font-semibold mb-2">
              OUR COLLECTION
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>

          <p className="text-gray-500">
            {products.length} products available
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-60 bg-white p-6 relative flex items-center justify-center">
                <span className="absolute top-3 left-3 text-xs font-medium bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full capitalize">
                  {product.category}
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-12">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-amber-500">
                    ★ {product.rating.rate}
                  </span>

                  <span className="text-sm text-gray-400">
                    ({product.rating.count} reviews)
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between gap-3 mt-auto pt-5">
                  <p className="text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                        setCartItem(prev =>[...prev,product])
                    //   console.log("Added to cart:", product.title)
                    }
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 active:scale-95 transition"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-gray-900 text-gray-300 text-center p-6"
      >
        <h2 className="text-xl font-bold text-white mb-2">
          ShopEase.
        </h2>

        <p className="text-sm">
          Discover quality products at great prices.
        </p>

        <p className="text-sm mt-3 text-gray-500">
          © 2026 ShopEase. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProductCard;

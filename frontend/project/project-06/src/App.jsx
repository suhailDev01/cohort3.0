import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const productsData = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      description:
        "Comfortable wireless headphones with deep bass and long battery life.",
      price: 2499,
      brand: "SoundMax",
      rating: 4.5,
      stock: 24,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      isLiked: false,
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      description:
        "Smartwatch with fitness tracking, heart-rate monitoring and notifications.",
      price: 3299,
      brand: "TechFit",
      rating: 4.3,
      stock: 15,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      isLiked: true,
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Footwear",
      description:
        "Lightweight running shoes designed for comfort and daily workouts.",
      price: 1899,
      brand: "RunPro",
      rating: 4.6,
      stock: 32,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      isLiked: false,
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      category: "Fashion",
      description:
        "Soft cotton t-shirt with a comfortable fit for everyday wear.",
      price: 699,
      brand: "UrbanWear",
      rating: 4.2,
      stock: 50,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      isLiked: false,
    },
    {
      id: 5,
      name: "Laptop Backpack",
      category: "Accessories",
      description: "Water-resistant backpack with separate laptop compartment.",
      price: 1299,
      brand: "CarryPro",
      rating: 4.4,
      stock: 18,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      isLiked: true,
    },
    {
      id: 6,
      name: "Coffee Mug",
      category: "Home",
      description:
        "Minimal ceramic coffee mug perfect for tea, coffee and hot drinks.",
      price: 399,
      brand: "HomeCraft",
      rating: 4.1,
      stock: 70,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
      isLiked: false,
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      category: "Electronics",
      description:
        "RGB mechanical keyboard with tactile keys for coding and gaming.",
      price: 2799,
      brand: "KeyMaster",
      rating: 4.7,
      stock: 12,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      isLiked: false,
    },
    {
      id: 8,
      name: "Water Bottle",
      category: "Fitness",
      description:
        "Reusable stainless-steel bottle that keeps drinks cold for hours.",
      price: 799,
      brand: "HydroMax",
      rating: 4.5,
      stock: 45,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      isLiked: true,
    },
    {
      id: 9,
      name: "Denim Jacket",
      category: "Fashion",
      description: "Classic denim jacket with a modern fit for casual outfits.",
      price: 2199,
      brand: "DenimCo",
      rating: 4.3,
      stock: 20,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      isLiked: false,
    },
    {
      id: 10,
      name: "Desk Lamp",
      category: "Home",
      description: "Adjustable LED desk lamp with multiple brightness levels.",
      price: 999,
      brand: "BrightHome",
      rating: 4.4,
      stock: 27,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      isLiked: false,
    },
  ];
  console.log(productsData);
  return (
  <div>
    <div className="flex flex-wrap gap-2">
         {
          productsData.map((elem)=>{
            return <ProductCard product ={elem} />
          })
         }
    </div>
  </div>
  );
};

export default App;

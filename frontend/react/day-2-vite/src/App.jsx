import React from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Create from "./components/Create";


const App = () => {
  const productData = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 1499,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Footwear",
      price: 2499,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Electronics",
      price: 3299,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 4,
      name: "Cotton T-Shirt",
      category: "Clothing",
      price: 699,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 5,
      name: "Backpack",
      category: "Accessories",
      price: 1199,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 6,
      name: "Denim Jeans",
      category: "Clothing",
      price: 1799,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1999,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    },
    {
      id: 8,
      name: "Sports Cap",
      category: "Accessories",
      price: 499,
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    },
    {
      id: 9,
      name: "Formal Shirt",
      category: "Clothing",
      price: 1299,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
      id: 10,
      name: "Casual Sneakers",
      category: "Footwear",
      price: 2199,
      image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    },
  ];

  return (
    <div>
       <Navbar />
     
    <div className="bg-slate-80 h-screen   flex-wrap gap-2 grid grid-cols-5">
      {
        productData.map((elem)=>{
          return <Product products={elem}/>
        })
      }

    </div>
      < Login />
       <Create />
     </div>
  );
};

export default App;

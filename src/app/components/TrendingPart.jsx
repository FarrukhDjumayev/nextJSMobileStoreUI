import React from "react";

function TrendingPart() {
  const categories = [
    { name: "Iphone", img: "/iphone.svg" },
    { name: "Mini Speakers", img: "/mini-speakers.svg" },
    { name: "Ipad mini Pro", img: "/Ipad.svg" },
    { name: "Headphone", img: "/airpod.svg" },
    { name: "Laptop", img: "/Laptop.svg" },
    { name: "Accessories", img: "/Airpods.svg" },
  ];

  const products = [
    { img: "/latest watch.svg", name: "Latest Smart Watch", price: "$90.00", oldPrice: "$100.00" },
    { img: "/Laptop.svg", name: "Apple Macbook Air M3", price: "$1099.00", oldPrice: "$1199.00" },
    { img: "/Entertainment.svg", name: "Homepod mini", price: "$54.00", oldPrice: "$68.00" },
    { img: "/speakers.svg", name: "Drou safe charger", price: "$34.00", oldPrice: "$52.00" },
    { img: "/Laptop.png", name: "Home Entertainment", price: "$94.00", oldPrice: "$113.00" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Trending Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition duration-300"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-20 h-20 object-contain"
              />
              <p className="mt-2 text-gray-700 font-medium">{category.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 py-8">
          
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 font-semibold">
              SECURITY SMART CAMERA
            </p>
            <h1 className="text-xl font-bold text-gray-900 my-2">
              Just starting at $850
            </h1>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl font-medium hover:bg-orange-600 transition">
              Shop Now
            </button>
            <img
              className="w-40 mt-4 object-contain"
              src="/Camera.svg"
              alt="Security Smart Camera"
            />
          </div>

          
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 font-semibold">
              ENTERTAINMENT & GAMES
            </p>
            <h1 className="text-xl font-bold text-gray-900 my-2">
              Just starting at $450
            </h1>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl font-medium hover:bg-orange-600 transition">
              Shop Now
            </button>
            <img
              className="w-40 mt-4 object-contain"
              src="/Games.svg"
              alt="Gaming Controller"
            />
          </div>
        </div>
      </div>
      <div className="px-6">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Latest Products</h2>
          <a href="#" className="text-orange-500 font-medium flex items-center">
            View all products <span className="ml-1">➝</span>
          </a>
        </div>

        
        <div className="grid grid-cols-5 gap-4">
          
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-32 object-contain mb-3"
              />
              <div className="flex justify-center mb-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-gray-700 font-medium">{product.name}</p>
              <p className="text-orange-500 font-semibold text-lg">
                {product.price}{" "}
                <span className="text-gray-500 line-through text-sm">
                  {product.oldPrice}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-lg shadow-lg p-8">
      
      <div className="text-left">
        <button className="bg-orange-500 text-white px-4 py-1 rounded mb-2">Hurry Up!</button>
        <h2 className="text-3xl font-bold">Up To 20% Discount</h2>
        <p className="text-lg text-gray-600">Check it Out</p>

        
        <div className="flex space-x-3 my-4">
          {["310 DAYS", "06 HRS", "34 MINS", "08 SEC"].map((time, index) => (
            <div key={index} className="text-center bg-white p-3 rounded shadow">
              <p className="text-2xl font-bold">{time.split(" ")[0]}</p>
              <p className="text-sm text-gray-500">{time.split(" ")[1]}</p>
            </div>
          ))}
        </div>

        
        <button className="bg-black text-white px-5 py-2 rounded-lg">Shop Now</button>
      </div>

      
      <img src="/Small iphone.svg" alt="iPhone" className="w-72" />
      <img src="/Big iphone.svg" alt="iPhone" className="w-72" />
    </div>
    </div>
  );
}

export default TrendingPart;

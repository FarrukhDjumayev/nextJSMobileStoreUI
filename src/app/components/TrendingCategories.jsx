import React from "react";

const TrendingCategories = () => {
  const categories = [
    { name: "Iphone", img: "/iphone.svg" },
    { name: "Mini Speakers", img: "/mini-speakers.svg" },
    { name: "Ipad mini Pro", img: "/Ipad.svg" },
    { name: "Headphone", img: "/airpod.svg" },
    { name: "Laptop", img: "/Laptop.svg" },
    { name: "Accessories", img: "/Airpods.svg" },
  ];

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-6">Trending Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition duration-300"
          >
            <img src={category.img} alt={category.name} className="w-20 h-20 object-contain" />
            <p className="mt-2 text-gray-700 font-medium">{category.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 py-8">
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-600 font-semibold">SECURITY SMART CAMERA</p>
          <h1 className="text-xl font-bold text-gray-900 my-2">Just starting at $850</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl font-medium hover:bg-orange-600 transition">
            Shop Now
          </button>
          <img className="w-40 mt-4 object-contain" src="/Camera.svg" alt="Security Smart Camera" />
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-600 font-semibold">ENTERTAINMENT & GAMES</p>
          <h1 className="text-xl font-bold text-gray-900 my-2">Just starting at $450</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl font-medium hover:bg-orange-600 transition">
            Shop Now
          </button>
          <img className="w-40 mt-4 object-contain" src="/Games.svg" alt="Gaming Controller" />
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;

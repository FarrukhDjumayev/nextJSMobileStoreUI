import React from "react";

const Banner = () => {
  return (
    <div className="container flex justify-between items-center bg-gray-100 rounded-lg shadow-lg p-8 mt-6">
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
  );
};

export default Banner;

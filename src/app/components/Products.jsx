"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Latest Products</h2>
        <Link href="/products" className="text-orange-500 font-medium flex items-center">
          View all products <span className="ml-1">➝</span>
        </Link>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <Link href={`/ProductDetails/${product.id}`}>
                <div>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={128}
                    height={128}
                    className="w-full h-32 object-contain mb-3 cursor-pointer"
                  />
                  <div className="flex justify-center mb-2">
                    {[...Array(Math.round(Number(product.rating) || 0))].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 font-medium">{product.title}</p>
                  <p className="text-orange-500 font-semibold text-lg">
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

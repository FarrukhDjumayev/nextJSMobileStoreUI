"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Latest Products</h2>
        <Link href="/products" className="text-orange-500 hover:underline">
          View all products →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative h-48 mb-4">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 100vw, 200px"
              />
            </div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= product.rating ? "text-yellow-500" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <h3 className="font-medium text-gray-800 mb-1">{product.title}</h3>
            <p className="text-orange-600 font-bold">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

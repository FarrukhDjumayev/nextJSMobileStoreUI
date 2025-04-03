'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

async function getProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // return the error to be handled later
  }
}

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init();
    getProduct(params.id)
      .then(setProduct)
      .catch((err) => setError('Failed to load product details. Please try again.'));
  }, [params.id]);

  if (error) {
    return <div className='text-center py-10 text-red-500'>{error}</div>;
  }

  if (!product) {
    return <div className='text-center py-10'>Loading...</div>;
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='space-y-4' data-aos='fade-right'>
          <div className='relative h-96 bg-gray-100 rounded-lg overflow-hidden'>
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className='object-contain'
              priority
            />
          </div>
          <div className='grid grid-cols-4 gap-2'>
            {product.images.map((img, i) => (
              <div key={i} className='relative h-20 bg-gray-100 rounded'>
                <Image src={img} alt={`${product.title} ${i + 1}`} fill className='object-cover' />
              </div>
            ))}
          </div>
        </div>

        <div data-aos='fade-left'>
          <h1 className='text-2xl font-bold mb-2'>{product.title}</h1>
          <div className='flex items-center mb-4'>
            <div className='flex text-yellow-500 mr-2'>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>{star <= Math.round(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className='text-gray-600'>
              {product.rating} ({product.reviews.length} reviews)
            </span>
          </div>

          <div className='bg-gray-100 p-4 rounded-lg mb-6'>
            <div className='flex items-baseline gap-2'>
              <span className='text-3xl font-bold text-orange-600'>${product.price}</span>
              {product.discountPercentage && (
                <span className='text-gray-500 line-through'>
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
              )}
            </div>
            {product.stock < 10 && <p className='text-red-500 mt-1'>Only {product.stock} left in stock!</p>}
          </div>

          <button className='mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition' data-aos='zoom-in'>
            Add to Cart
          </button>
        </div>
      </div>

      <div className='mt-12' data-aos='fade-up'>
        <h2 className='text-xl font-bold mb-4'>Customer Reviews</h2>
        <div className='space-y-4'>
          {product.reviews.map((review, index) => (
            <div key={index} className='border-b pb-4'>
              <div className='flex justify-between'>
                <div>
                  <p className='font-medium'>{review.reviewerName}</p>
                  <div className='flex text-yellow-500'>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                </div>
                <p className='text-gray-500 text-sm'>{new Date(review.date).toLocaleDateString()}</p>
              </div>
              <p className='mt-2 text-gray-700'>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

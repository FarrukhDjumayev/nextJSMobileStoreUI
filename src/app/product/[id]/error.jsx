"use client";

export default function Error({ error, reset }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h2 className="text-xl font-bold text-red-600 mb-2">
        Failed to load product
      </h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-orange-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
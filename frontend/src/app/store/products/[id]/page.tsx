'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  fileUrl: string;
  category: string;
  tags: string;
  status: string;
  downloads: number;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/products/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        
        const data = await res.json();
        setProduct(data);
        
        // Generate preview URL based on file type
        if (data.fileUrl) {
          const fileExtension = data.fileUrl.split('.').pop()?.toLowerCase();
          if (['pdf', 'jpg', 'jpeg', 'png', 'gif'].includes(fileExtension || '')) {
            setPreviewUrl(data.fileUrl);
          }
        }
      } catch (err) {
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handlePurchase = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3001/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: params.id }),
      });

      if (!res.ok) throw new Error('Failed to create order');

      const data = await res.json();
      window.location.href = data.paymentUrl;
    } catch (err) {
      setError('Failed to process purchase');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600 dark:text-red-400">
            {error || 'Product not found'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {product.title}
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {product.category}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {product.downloads} downloads
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Preview Section */}
            {previewUrl && (
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Preview
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  {previewUrl.endsWith('.pdf') ? (
                    <iframe
                      src={previewUrl}
                      className="w-full h-96"
                      title="PDF Preview"
                    />
                  ) : (
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  )}
                </div>
              </div>
            )}

            {/* Purchase Button */}
            <button
              onClick={handlePurchase}
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Purchase Now
            </button>

            {error && (
              <div className="text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
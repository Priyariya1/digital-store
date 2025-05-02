'use client';

import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const categories = [
    { name: 'All', path: '/products' },
    { name: 'Design', path: '/products/design' },
    { name: 'Drawing & Painting', path: '/products/art' },
    { name: '3D', path: '/products/3d' },
    { name: 'Self Improvement', path: '/products/self-improvement' },
    { name: 'Music & Sound Design', path: '/products/music' },
    { name: 'Software Development', path: '/products/software' },
    { name: 'Business & Money', path: '/products/business' },
    { name: 'Education', path: '/products/education' },
    { name: 'Gaming', path: '/products/gaming' },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: 'Digital Marketing Course',
      price: 59.99,
      image: '/product.jpg',
      rating: 4.5,
      reviews: 128,
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Digital Marketing Course',
      price: 59.99,
      image: '/product.jpg',
      rating: 4.5,
      reviews: 128,
      author: 'John Doe',
    },
    {
      id: 3,
      title: 'Digital Marketing Course',
      price: 59.99,
      image: '/product.jpg',
      rating: 4.5,
      reviews: 128,
      author: 'John Doe',
    },
    {
      id: 4,
      title: 'Digital Marketing Course',
      price: 59.99,
      image: '/product.jpg',
      rating: 4.5,
      reviews: 128,
      author: 'John Doe',
    },
    {
      id: 5,
      title: 'Digital Marketing Course',
      price: 59.99,
      image: '/product.jpg',
      rating: 4.5,
      reviews: 128,
      author: 'John Doe',
    },
    {
      id: 6,
      title: 'Digital Marketing Course',
      price: 59.99,
      image: '/product.jpg',
      rating: 4.5,
      reviews: 128,
      author: 'John Doe',
    },
    {
      id: 7,
      title: 'Digital Marketing Course',
      price: 59.99,
      image: '/product.jpg',
      rating: 4.5,
      reviews: 128,
      author: 'John Doe',
    },
    // Add more featured products here
  ];

  return (
    <div className="min-h-screen bg-secondary-gray">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-b from-primary-navy to-primary-blue overflow-hidden">
        {/* Wavy Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="wave-animation"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 max-w-3xl">
            The best free stock photos, royalty free images & videos shared by creators.
          </h1>
          <div className="w-full max-w-3xl">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className='bg-amber-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.path}
              className="px-4 py-2 text-sm whitespace-nowrap rounded-full bg-white hover:bg-primary-blue hover:text-gray-400 text-gray-600 transition-colors shadow-sm"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 ">
        <h2 className="text-2xl font-bold mb-6 text-gray-600">Featured products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-600">{product.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">★★★</span>
                    <span className="text-gray-600">{product.rating}</span>
                    <span className="text-gray-600 opacity-60">({product.reviews})</span>
                  </div>
                  <span className="font-bold text-gray-600">${product.price}</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">by {product.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

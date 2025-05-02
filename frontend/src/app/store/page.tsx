'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Slider } from '@/components/ui/Slider';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  tags: string;
  status: string;
  downloads: number;
  createdAt: string;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  tags: string[];
  sortBy: string;
  view: 'grid' | 'list';
  searchQuery: string;
}

export default function StorePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    tags: [],
    sortBy: 'newest',
    view: 'grid',
    searchQuery: '',
  });

  // Fetch products with filters
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParams = new URLSearchParams();
        
        if (filters.categories.length) {
          queryParams.append('categories', filters.categories.join(','));
        }
        queryParams.append('minPrice', filters.priceRange[0].toString());
        queryParams.append('maxPrice', filters.priceRange[1].toString());
        if (filters.tags.length) {
          queryParams.append('tags', filters.tags.join(','));
        }
        queryParams.append('sortBy', filters.sortBy);
        if (filters.searchQuery) {
          queryParams.append('search', filters.searchQuery);
        }

        const res = await fetch(`http://localhost:3001/api/products?${queryParams}`);
        if (!res.ok) throw new Error('Failed to fetch products');
        
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    if (showSearch) {
      fetchProducts();
    }
  }, [filters, showSearch]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  if (!showSearch) {
    return (
      <div className="min-h-screen bg-gray-600 text-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image
              src="/bg3.jpg"
              alt="Digital Store Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <div className="relative z-20 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover Amazing Digital Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Browse through our collection of high-quality digital products, from templates to software solutions.
            </p>
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
              The one commerce platform behind it all
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/home1.jpg"
                  alt="Digital products showcase"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Digital Downloads</h3>
                    <p className="text-gray-300">Instant delivery of digital products to customers worldwide</p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/home5.jpg"
                  alt="Mobile commerce"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Mobile Commerce</h3>
                    <p className="text-gray-300">Seamless shopping experience on any device</p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/home3.jpg"
                  alt="Global reach"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                    <p className="text-gray-300">Sell to customers anywhere in the world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selling Options Section */}
        <section className="py-24 bg-gray-600  ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  Sell here, there, and everywhere
                </h2>
                <p className="text-xl text-white">
                  Whether you're just starting out or scaling up, our platform gives you everything you need to connect with customers and grow your business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/auth/register"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Start selling
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-block border border-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    View pricing
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/home4.jpg"
                      alt="Digital marketplace"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/home2.jpg"
                      alt="Online store"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/home6.jpg"
                      alt="Mobile shopping"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/home7.jpg"
                      alt="Global commerce"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image
              src="/ready.jpg"
              alt="Ready to start selling background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to start selling?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of successful businesses who trust our platform
            </p>
            <Link
              href="/auth/register"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get started
            </Link>
          </div>
        </section>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with back button */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={() => setShowSearch(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="relative flex-1 max-w-xl mx-4">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              value={filters.searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleFilterChange({ view: 'grid' })}
              className={`p-2 rounded ${filters.view === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => handleFilterChange({ view: 'list' })}
              className={`p-2 rounded ${filters.view === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">Filters</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-2 dark:text-gray-200">Categories</h3>
                {['eBooks', 'Templates', 'Software', 'Code Snippets'].map((category) => (
                  <label key={category} className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={(e) => {
                        const newCategories = e.target.checked
                          ? [...filters.categories, category]
                          : filters.categories.filter(c => c !== category);
                        handleFilterChange({ categories: newCategories });
                      }}
                      className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-2 dark:text-gray-200">Price Range</h3>
                <div className="px-2">
                  <Slider
                    min={0}
                    max={1000}
                    step={100}
                    value={filters.priceRange}
                    onChange={(value) => handleFilterChange({ priceRange: value as [number, number] })}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>₹{filters.priceRange[0]}</span>
                    <span>₹{filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <h3 className="font-medium mb-2 dark:text-gray-200">Sort By</h3>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-3"
                >
                  <option value="newest">Newest First</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="lg:w-3/4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            {products.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  No products found
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Try adjusting your filters or search query
                </p>
              </div>
            ) : (
              <div className={`
                ${filters.view === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
                }
              `}>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    view={filters.view}
                    onClick={() => router.push(`/store/product/${product.id}`)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
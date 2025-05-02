'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('photos');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery, 'in', searchType);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex">
          {/* Search Type Selector */}
          <div className="relative">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="h-14 px-4 text-primary-navy bg-white border-r border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-blue appearance-none font-medium"
            >
              <option value="photos">Photos</option>
              <option value="videos">Videos</option>
              <option value="products">Products</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full h-14 pl-10 pr-20 rounded-r-lg bg-white text-primary-navy placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue text-lg"
              placeholder="Search for free photos"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Search Button - Visible on Mobile */}
            <button
              type="submit"
              className="md:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-navy transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
} 
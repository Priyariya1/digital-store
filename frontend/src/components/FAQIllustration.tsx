export default function FAQIllustration() {
  return (
    <div className="relative">
      {/* Question Mark Bubbles */}
      <div className="absolute -top-8 -right-4">
        <div className="bg-white rounded-lg shadow-lg p-2">?</div>
      </div>
      <div className="absolute -top-4 right-12">
        <div className="bg-white rounded-lg shadow-lg p-2">?</div>
      </div>
      <div className="absolute top-12 -left-4">
        <div className="bg-white rounded-lg shadow-lg p-2">?</div>
      </div>
      <div className="absolute -bottom-4 right-8">
        <div className="bg-white rounded-lg shadow-lg p-2">?</div>
      </div>

      {/* Main Illustration */}
      <div className="relative">
        {/* Person */}
        <div className="w-64 h-64 relative">
          {/* Body - Blue Shirt */}
          <div className="absolute inset-x-0 top-16 bottom-0 bg-blue-400 rounded-t-full" />
          
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 bg-[#FFD3B5] rounded-full"> {/* Skin color */}
              {/* Glasses */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-6 border-2 border-gray-800 rounded-full" />
              </div>
            </div>
          </div>

          {/* Laptop */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-24 bg-blue-600 rounded-lg" /> {/* Screen */}
            <div className="w-48 h-2 bg-blue-700 rounded-b-lg" /> {/* Base */}
          </div>

          {/* Coffee Cup */}
          <div className="absolute bottom-12 right-0">
            <div className="w-8 h-10 bg-orange-500 rounded-lg" />
            <div className="w-10 h-2 bg-orange-600 rounded-full -mt-8 ml-4" /> {/* Handle */}
          </div>

          {/* Plant */}
          <div className="absolute bottom-12 left-0">
            <div className="w-8 h-8 bg-green-500 rounded-full" />
            <div className="w-6 h-6 bg-green-400 absolute -top-4 -right-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 
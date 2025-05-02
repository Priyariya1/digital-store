import Image from "next/image";
import Link from "next/link";
import { headers } from 'next/headers';

async function getProducts() {
    const res = await fetch('http://localhost:3000/api/products', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });
    
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export const metadata = {
  title: "Products - Digital Store",
  description: "Browse our collection of beautiful digital products",
  openGraph: {
    title: "Products - Digital Store",
    description: "Browse our collection of beautiful digital products",
  },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-700 text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">{product.title}</h2>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 
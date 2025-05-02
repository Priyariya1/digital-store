import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(slug: string) {
  const res = await fetch(`http://localhost:3001/api/products/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} - Digital Store`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {product.description}
            </p>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="productId" value={product.id} />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Purchase Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
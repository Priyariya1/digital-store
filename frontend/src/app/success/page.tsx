import Link from "next/link";

export const metadata = {
  title: "Purchase Successful - Digital Store",
  description: "Thank you for your purchase!",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Purchase Successful!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Thank you for your purchase. Your digital product is ready for download.
        </p>
        <div className="space-y-4">
          <a
            href="/download"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Download Your Product
          </a>
          <div>
            <Link
              href="/products"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
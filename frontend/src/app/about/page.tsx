'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedStat from '@/components/AnimatedStat';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-primary-blue uppercase tracking-wide mb-2">
                  ABOUT US
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Digital Store powers millions of businesses worldwide
                </h1>
                <p className="text-xl text-gray-600">
                  The all-in-one commerce platform to start, run, and grow a business.
                </p>
              </div>
              <div>
                <Link 
                  href="/auth/register"
                  className="inline-block bg-blue-400 text-black px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/about4.jpg"
                      alt="Digital store showcase"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/about1.jpg"
                      alt="Digital products"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/about2.jpg"
                      alt="Online marketplace"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/about3.jpg"
                      alt="Digital store success"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/about6.jpg"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black uppercase tracking-wide">
                OUR STORY
              </h2>
              <h3 className="text-3xl font-bold text-gray-800">
                The first Digital Store was our own
              </h3>
              <p className="text-lg text-gray-600">
                Over a decade ago, we started a store to sell digital products online. 
                None of the ecommerce solutions at the time gave us the control we needed 
                to be successful—so we built our own. Today, businesses of all sizes use 
                Digital Store, whether they're selling online, in retail stores, or on-the-go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-gray-500">
            <AnimatedStat
              end={2}
              label="of active users"
              suffix="M+"
            />
            <AnimatedStat
              end={170}
              label="countries supported"
              suffix="+"
            />
            <AnimatedStat
              end={100}
              label="products sold"
              prefix="$"
              suffix="B+"
            />
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/product.jpg"
          alt="Digital Store background"
          fill
          className="object-cover"
          priority
        />
      </section>
    </div>
  );
} 
import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    title: 'Digital Product 1',
    slug: 'digital-product-1',
    description: 'This is a fantastic digital product that will help you achieve great things.',
    price: 29.99,
    imageUrl: '/product1.jpg',
  },
  {
    id: 2,
    title: 'Digital Product 2',
    slug: 'digital-product-2',
    description: 'Another amazing digital product with incredible features.',
    price: 39.99,
    imageUrl: '/product2.jpg',
  },
  {
    id: 3,
    title: 'Digital Product 3',
    slug: 'digital-product-3',
    description: 'The ultimate digital product for professionals.',
    price: 49.99,
    imageUrl: '/product3.jpg',
  },
  {
    id: 4,
    title: 'Digital Product 1',
    slug: 'digital-product-1',
    description: 'This is a fantastic digital product that will help you achieve great things.',
    price: 29.99,
    imageUrl: '/product3.jpg',
  },
  {
    id: 5,
    title: 'Digital Product 2',
    slug: 'digital-product-2',
    description: 'Another amazing digital product with incredible features.',
    price: 39.99,
    imageUrl: '/product1.jpg',
  },
  {
    id: 6,
    title: 'Digital Product 3',
    slug: 'digital-product-3',
    description: 'The ultimate digital product for professionals.',
    price: 49.99,
    imageUrl: '/product2.jpg',
  },
];

export async function GET() {
  return NextResponse.json(products);
} 
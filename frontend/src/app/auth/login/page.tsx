'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to login');
      }
      const data = await res.json();
      
      // Store user data and trigger storage event
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Dispatch a custom event to notify about the auth change
      window.dispatchEvent(new Event('auth-change'));
      
      router.push('/store');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-blue-500 flex-col justify-center items-center text-white p-12">
        <Image src="/login2.png" alt="Illustration" width={320} height={320} className="mb-8" />
        <h2 className="text-3xl font-bold mb-4">Hello Again!</h2>
        <p className="text-lg mb-2 text-center">Please login to your account to access digital products and exclusive features.</p>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-2">New Scheduling And Routing Options</h3>
          <p className="text-base">We've updated the format of routes and research.</p>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-gray-900">Hello Again!</h2>
            <p className="text-gray-500">Please enter your credentials to login.</p>
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div className="text-right mt-1">
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">Recovery Password</Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className="flex items-center justify-center my-2">
              <span className="text-gray-400 text-xs">or</span>
            </div>
            <button
              type="button"
              className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              // onClick={handleGoogleLogin} // Implement Google login if needed
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.4 0 4.7.7 6.6 2l6.4-6.4C33.5 5.1 28.1 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-8.5 20-21 0-1.3-.1-2.1-.3-3z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 17.1 18.3 15 24 15c2.4 0 4.7.7 6.6 2l6.4-6.4C33.5 5.1 28.1 3 24 3c-7.2 0-13.4 4.1-16.7 10.1z"/><path fill="#FBBC05" d="M24 45c5.8 0 10.7-1.9 14.6-5.1l-7-5.7C29.7 35.7 27 36.5 24 36.5c-5.7 0-10.6-3.7-12.3-8.8l-7 5.4C7.1 42.1 14.9 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.4 0 4.7.7 6.6 2l6.4-6.4C33.5 5.1 28.1 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-8.5 20-21 0-1.3-.1-2.1-.3-3z"/></g></svg>
              Sign in with Google
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="text-blue-600 hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
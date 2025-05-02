'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const checkUser = () => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        setUser(JSON.parse(userStr));
      } else {
        setUser(null);
      }
    }
  };

  useEffect(() => {
    checkUser();
    window.addEventListener('storage', checkUser);
    window.addEventListener('auth-change', checkUser);
    
    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('auth-change', checkUser);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      router.push('/');
    }
  };

  // Base navigation items
  const baseNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
  ];

  // Add Dashboard for logged-in users
  const navItems = user 
    ? [...baseNavItems, { name: 'Dashboard', path: '/dashboard' }]
    : baseNavItems;

  return (
    <nav className="bg-primary-navy text-primary-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/store" className="text-2xl font-bold text-primary-light hover:text-primary-blue transition-colors">
              Digital Store
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium hover:text-primary-blue transition-colors ${
                  pathname === item.path ? 'text-primary-blue' : 'text-primary-light'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm font-medium text-primary-light">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-primary-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-charcoal transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-sm font-medium text-primary-light hover:text-primary-blue transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-primary-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-yellow transition-colors"
                >
                  Start selling
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
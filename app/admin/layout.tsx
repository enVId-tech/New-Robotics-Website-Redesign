'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './layout.module.scss';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Skip authentication check for login page
      if (pathname === '/admin/login') {
        setIsAuthenticated(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/auth/session');
        const data = await response.json();
        
        if (!data.authenticated) {
          router.push('/admin/login');
          return;
        }
        
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router, pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.loadingScreen}>
          <div className={styles.spinner}></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Don't render protected content if not authenticated
  if (!isAuthenticated && pathname !== '/admin/login') {
    return null;
  }

  // Don't show navbar for login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className={styles.adminContainer}>
      <nav className={styles.adminNav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.homeLink}>
            ← Back to Website
          </Link>
          <h2>Admin Panel</h2>
          <div className={styles.navLinks}>
            <Link href="/admin" className={styles.navLink}>
              Media Manager
            </Link>
            <Link href="/admin/content" className={styles.navLink}>
              Content Manager
            </Link>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className={styles.adminMain}>
        {children}
      </main>
    </div>
  );
}
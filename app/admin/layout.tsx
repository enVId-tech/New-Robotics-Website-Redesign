import Link from 'next/link';
import styles from './layout.module.scss';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          </div>
        </div>
      </nav>
      <main className={styles.adminMain}>
        {children}
      </main>
    </div>
  );
}
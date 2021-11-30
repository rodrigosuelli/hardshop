import Header from './Header';
import Sidebar from './Sidebar';

import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.mainContainer}>
        <Header />
        {children}
      </main>
    </div>
  );
}

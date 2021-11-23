import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />

      <section className={styles.pageContent}>
        <Navbar />
        {children}
      </section>
    </>
  );
}

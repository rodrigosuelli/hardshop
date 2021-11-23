import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />

      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}

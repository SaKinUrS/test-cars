import { Footer } from '@features/footer';
import { Header } from '@features/header';
import { Sidebar } from '@features/sidebar';
import { Outlet } from 'react-router-dom';

interface IMainLayoutProps {}

export const MainLayout: React.FC<IMainLayoutProps> = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

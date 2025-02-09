import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center bg-dark-blue flex-col h-screen w-full">
        <div className="flex flex-col w-[1160px] relative h-screen">
        <Header />
        <main className="flex-grow w-full text-white">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

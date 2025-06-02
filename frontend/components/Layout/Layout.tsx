import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
      <div className="#background absolute inset-0 -z-10"></div>
      <div className="flex flex-col w-full flex-grow">
        <div className="container mx-auto max-w-[1140px] px-5 pt-5">
          <Header />
        </div>
        <main className="flex flex-grow w-full">
          <div className="container mx-auto max-w-[1140px] px-5 pb-8">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
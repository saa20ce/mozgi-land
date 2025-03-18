import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex items-center justify-center  flex-col h-full w-full">
      <div className="background"></div>
      <div className="flex flex-col w-auto md:w-[1160px] relative h-screen pt-5 pl-5 pr-5 bg-">
        <Header />
        <main className="flex-grow w-full text-white">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
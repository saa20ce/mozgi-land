import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden ">
      <div className="background inset-0 "></div>
      <div className="flex flex-col w-full gap-4 flex-grow xl:px-12">
        <div className="container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px] pt-3 md:pt-5  xl:px-0">
          <Header />
          <Breadcrumbs />
        </div>
        <main className="flex flex-grow w-full ">
          <div className="container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px]  xl:px-0 min-h-0 ">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
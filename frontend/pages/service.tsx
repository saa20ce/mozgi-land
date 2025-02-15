import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';
import ServicesMenu from '@/components/ServicesScroll/ServicesMenu';

export default function Home() {

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center gap-8 h-full w-full p-2">
        <div className="md:w-1/2 space-y-6">
          <MainMenu />
        </div>
        <ServicesMenu/>
      </div>
    </Layout>
  );
}

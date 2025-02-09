import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';

export default function Home() {

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center gap-8 h-full w-full">
        <div className="md:w-1/2 space-y-6">
          <MainMenu />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 bg-[#344F73] min-h-[50vh] rounded-[24px]">
        </div>
      </div>
    </Layout>
  );
}

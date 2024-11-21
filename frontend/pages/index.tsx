import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';

export default function Home() {

  return (
    <Layout>
      <div className="md:w-1/2 space-y-6">
        <Text as='h1' className='text-4xl font-bold'>
          Разработка и дизайн
          </Text>
        <Text as='p' className='text-lg'>
          Современная веб-студия, занимающееся разработкой продающих сайтов и дизайнов социальных сетей
        </Text>
        <MainMenu />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="/images/Man.png" alt="3D Human" className="w-full h-auto"/>
      </div>
    </Layout>
  );
}

import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';

export default function Home() {

  return (
    <Layout>
      <div className="flex flex-col justify-end md:flex-row items-center gap-8 h-full w-full ">
        <div className="w-[460px] space-y-6 z-10">
          {/* <Text as='h1' className='text-4xl font-bold'>
            Разработка и дизайн
          </Text> */}
          <h1 className='text-4xl font-bold'>Разработка и дизайн</h1>
          <Text as='p' className='text-lg'>
            Современная веб-студия, занимающееся разработкой продающих сайтов и дизайнов социальных сетей
          </Text>
          <MainMenu />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 z-0">
          <img src="/images/Man.png" alt="3D Human" className="w-auto h-[80vh] absolute bottom-0 right-0 z-0"/>
        </div>
      </div>
    </Layout>
  );
}

import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Layout>
      <div className="relative flex flex-col xl:flex-row justify-between xl:pt-8 2xl:pt-10 items-center gap-8 w-full">
        <div className={`w-full md:w-[704px] xl:w-[540px] h-[180px] 2xl:pt-[16px] space-y-4 z-10 ${isMobileMenuOpen ? 'hidden xl:block' : 'block'}`}>
          <h1 className="text-center text-[28px] md:text-[42px] xl:text-[36px] 2xl:text-[42px] xl:text-left  font-bold text-white">
            Разработка и дизайн
          </h1>
          <Text as="p" className="text-center xl:text-left text-[15px] md:text-[24px] xl:text-[20px] xl:w-[446px]">
            Современная веб-студия, занимающееся разработкой продающихся цифровых продуктов для любого бизнеса.
          </Text>

          <div className="hidden xl:block">
            <MainMenu
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>

        <div className="xl:hidden">
          <MainMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>

      <div className={`absolute bottom-0 left-0  xl:left-auto xl:right-[calc(50%-600px)] w-full flex justify-center xl:justify-end z-0 ${isMobileMenuOpen ? 'hidden xl:flex' : 'flex'}`}>
        <Image
          src="/images/Man.png"
          alt="3D Human"
          className="block md:hidden w-full max-w-[300px] h-auto object-contain"
          style={{ transform: 'scale(1.3) translateY(9%) translateX(10%)' }}
          width={300} 
          height={300} 
        />

        <Image
          src="/images/ManTablet.png"
          alt="3D HUMAN"
          className="hidden xl:hidden md:block lg:hidden w-full max-w-[400px] h-auto object-contain"
          style={{ transform: 'scale(2) translateY(7%) translateX(8%)' }}
          width={400} 
          height={400}
        />
        <Image
          src="/images/ManDesktop.png"
          alt="3D Human"
          className="hidden xl:block w-auto h-[80vh] lg:scale-1 xl:scale-1 2xl:scale-[1.2] object-contain"
          style={{ transform: 'scale(1.2)' }} 
          width={600} 
          height={800}
        />
      </div>
    </Layout>
  );
}
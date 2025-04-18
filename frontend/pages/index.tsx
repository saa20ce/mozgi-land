import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Layout>
      <div className="relative flex flex-col xl:flex-row justify-between xl:pt-10 items-center gap-8 w-full">
        
        <div className={`w-full md:w-[704px] xl:w-[540px] w-[360px] h-[180px] pt-[16px] space-y-4 z-10 ${isMobileMenuOpen ? 'hidden xl:block' : 'block'}`}>
          <h1 className="text-center  text-[28px] md:text-[42px] xl:text-left xl:text-[42px] font-bold text-white">
            Разработка и дизайн
          </h1>
          <Text as="p" className="text-center text-[15px] md:text-[24px]  xl:text-left xl:text-lg">
            Современная веб-студия, занимающееся разработкой продающих сайтов и дизайнов социальных сетей.
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
        <img
          src="/images/Man.png"
          alt="3D Human"
          className="block md:hidden w-full max-w-[300px] h-auto object-contain"
          style={{ transform: 'scale(1.3) translateY(9%) translateX(10%)' }}
        />

        <img 
          src="/images/ManTablet.png"
          alt="3D HUMAN"
          className='hidden xl:hidden md:block lg:hidden w-full max-w-[500px] h-auto object-contain'
          style={{ transform: 'scale(2) translateY(7%) translateX(8%)' }}
          />
        <img
          src="/images/ManDesktop.png"
          alt="3D Human"
          className="hidden  xl:block w-auto h-[80vh] object-contain"
          style={{ transform: 'scale(1.2)',marginRight:'0' }}
        />
      </div>
    </Layout>
  );
}
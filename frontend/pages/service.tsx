import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';
import ServicesMenu from '@/components/ServicesScroll/ServicesMenu';
import { useRouter } from "next/router";
import { useState } from 'react';
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center gap-8 h-full w-full mt-48">
        <div className="md:w-1/2 space-y-6">
          <MainMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        </div>
        <ServicesMenu/>
      </div>
    </Layout>
  );
}

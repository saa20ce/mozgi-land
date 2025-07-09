import Image from 'next/image';

import MainMenu from '../MainMenu/MainMenu';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const router = useRouter();
  const { locale, asPath } = router;

	const toggleLocale = () => {
    const nextLocale = locale === 'ru' ? 'en' : 'ru';
    router.push(asPath, asPath, { locale: nextLocale });
  };

	return (
		<header className='flex items-center justify-between p-5 bg-[#F6F6F633] w-full h-[64px] rounded-full text-white-custom'>
			<div className='flex items-center space-x-3'>
				<a href='http://localhost:3000/'>
					<div className=' bg-[#F26666] rounded-full px-5 py-[6px] font-medium min-w-[94px] text-xl'>
						LOGO
					</div>
				</a>
			</div>
			<div className='flex-center gap-2'>
				<div className='rounded-full'>
					<button onClick={toggleLocale} className='rounded-full focus:outline-none flex-center'>
          <Image
            src='/images/icon-globe.png'
            alt='Смена языка'
            width={32}
            height={32}
          />
        </button>
				</div>
				<div>
					<MainMenu
						isMobileMenuOpen={isMobileMenuOpen}
						setIsMobileMenuOpen={setIsMobileMenuOpen}
						burger={true}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;

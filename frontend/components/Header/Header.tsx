import Image from 'next/image';
import MainMenu from '../MainMenu/MainMenu';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LogoIcon } from '../Logo/LogoIcon';

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
				<Link href='/' locale={router.locale}>
					<LogoIcon className='h-[44px] w-[44px]' />
				</Link>
			</div>
			<div className='flex-center gap-2'>
				<div className='rounded-full'>
					<button
						onClick={toggleLocale}
						className='rounded-full focus:outline-none flex-center'
					>
						<Image
							src='/images/globe.svg'
							alt='Смена языка'
							width={32}
							height={32}
							loading='eager'
							priority
							unoptimized
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

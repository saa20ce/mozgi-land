import Button from '../Button/Button';
import Text from '../Text/Text';
import { useRouter } from 'next/router';
import Feedback from '../Feedback/Feedback';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import burgerIcon from '@/public/images/burger.svg';
import { useTranslation } from 'next-i18next';

interface MainMenuProps {
	isMobileMenuOpen: boolean;
	setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	burger?: boolean;
}

const MainMenu = ({
	isMobileMenuOpen,
	setIsMobileMenuOpen,
	burger = false,
}: MainMenuProps) => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';
	const [isFormOpen, setIsFormOpen] = useState(false);
	const formRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер формы
	const modalMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('menu');

	const handleMenuToggle = (isOpen: boolean) => {
		setIsMobileMenuOpen(isOpen);
	};

	const handleOpenForm = () => {
		setIsFormOpen(true);
		handleMenuToggle(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isFormOpen &&
				formRef.current &&
				!formRef.current.contains(event.target as Node)
			) {
				setIsFormOpen(false);
			}

			if (
				isMobileMenuOpen &&
				modalMenuRef.current &&
				!modalMenuRef.current.contains(event.target as Node)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		if (isFormOpen || isMobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isFormOpen, isMobileMenuOpen, setIsFormOpen, setIsMobileMenuOpen]);

	return (
		<div className='relative'>
			{!burger && isHomePage && (
				<div className='xl:hidden fixed bottom-[68px] md:bottom-20 left-50 -translate-x-1/2 w-full px-5 flex justify-center z-50'>
					<Button
						text={t('openMenu')}
						active
						onClick={() => handleMenuToggle(true)}
						type='openbutton'
					/>
				</div>
			)}

			{burger && (
				<button
					onClick={() => handleMenuToggle(true)}
					className='flex-center'
				>
					<Image
						alt={t('burgerMenuAlt')}
						width={32}
						height={32}
						src={burgerIcon}
					/>
				</button>
			)}

			{isMobileMenuOpen && (
				<div className=' fixed inset-0 z-[1000] backdrop-blur-lg flex items-center justify-center'>
					<div
						className='relative w-full max-w-[320px] md:max-w-[462px] h-[296px] md:h-[364px] mx-auto px-0'
						ref={modalMenuRef}
					>
						<button
							className='absolute -top-12 right-0 md:right-0 text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700 z-[1001]'
							onClick={() => handleMenuToggle(false)}
						>
							<Image
								src='/images/icon.png'
								alt={t('closeMenuAlt')}
								width={32}
								height={32}
							/>
						</button>

						<div className='flex flex-col gap-y-2 space-y-4'>
							<div>
								<Button
									text={t('consultation')}
									type='mobilemenu'
									active
									className='w-full'
									onClick={handleOpenForm}
								/>
							</div>
							<Text
								as='a'
								href='/service'
								className='block w-full'
							>
								<Button
									text={t('ourServices')}
									type='mobilemenu'
									className='w-full'
								/>
							</Text>
							<Text
								as='a'
								href='/ourworks'
								className='block w-full'
							>
								<Button
									text={t('ourWorks')}
									type='mobilemenu'
									className='w-full'
								/>
							</Text>
							<Text
								as='a'
								href='/questions'
								className='block w-full'
							>
								<Button
									text={t('faq')}
									type='mobilemenu'
									className='w-full'
								/>
							</Text>
							<Text as='a' href='/about' className='block w-full'>
								<Button
									text={t('aboutUs')}
									type='mobilemenu'
									className='w-full'
								/>
							</Text>
						</div>
					</div>
				</div>
			)}

			{isFormOpen && (
				<div className='fixed inset-0 flex items-center justify-center backdrop-blur-lg z-[2000] xl:backdrop-blur-md'>
					<div ref={formRef} className='relative'>
						<Feedback
							onClose={() => setIsFormOpen(false)}
						/>
					</div>
				</div>
			)}

			{!burger && (
				<div className='hidden xl:flex flex-col xl:gap-y-3 xl:mt-6  2xl:mt-8'>
					<div>
						<Button
							text={t('consultation')}
							active
							onClick={handleOpenForm}
							type='desktopmenu'
							className='text-button-3xl'
						/>
					</div>
					<Text as='a' href='/service'>
						<Button
							text={t('ourServices')}
							type='desktopmenu'
							className='text-button-3xl'
						/>
					</Text>
					<Text as='a' href='/ourworks'>
						<Button
							text={t('ourWorks')}
							type='desktopmenu'
							className='text-button-3xl'
						/>
					</Text>
					<Text as='a' href='/questions'>
						<Button
							text={t('faq')}
							type='desktopmenu'
							className='text-button-3xl'
						/>
					</Text>
					<Text as='a' href='/about'>
						<Button
							text={t('aboutUs')}
							type='desktopmenu'
							className='text-button-3xl'
						/>
					</Text>
				</div>
			)}
		</div>
	);
};

export default MainMenu;

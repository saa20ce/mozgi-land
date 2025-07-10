import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import MainMenu from '@/components/MainMenu/MainMenu';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { t } = useTranslation('common');

	return (
		<Layout>
			<div className='text-white-custom 2xl:pl-[95px] relative flex flex-col xl:flex-row justify-between xl:pt-3 2xl:pt-10 items-center w-full '>
				<div
					className={`w-full md:w-[704px] xl:w-[540px] h-[180px] 2xl:pt-[16px] z-10 xl:pt-8 3xl:pt-12 `}
				>
					<h1 className='text-center text-[28px] md:text-[42px] xl:text-[36px] 2xl:text-[36px] xl:text-left font-bold'>
						{t('title')}
					</h1>
					<Text
						as='p'
						size='msm'
						className='text-center text-[15px]/[24px] xl:text-left md:text-[24px] xl:text-[20px]/[28px] xl:w-[446px] xl:mt-3  3xl:w-[638px]'
					>
						{t('description')}
					</Text>

					<div className='hidden xl:block 3xl:max-w-[326px]'>
						<MainMenu
							isMobileMenuOpen={isMobileMenuOpen}
							setIsMobileMenuOpen={setIsMobileMenuOpen}
						/>
					</div>
				</div>

				<div className='xl:hidden'>
					<MainMenu
						isMobileMenuOpen={isMobileMenuOpen}
						setIsMobileMenuOpen={setIsMobileMenuOpen}
					/>
				</div>
			</div>

			<div
				className={`absolute bottom-[6vh] left-0  xl:left-auto xl:right-[calc(50%-600px)] w-full flex justify-center xl:justify-end z-0 `}
			>
				<Image
					src='/images/Man.png'
					alt='3D Human'
					className='block md:hidden w-full max-w-[300px] h-auto object-contain'
					style={{
						transform: 'scale(1.35) translateY(7%) translateX(7%)',
					}}
					width={300}
					height={300}
				/>

				<Image
					src='/images/ManTablet.png'
					alt='3D HUMAN'
					className='hidden xl:hidden md:block w-full max-w-[400px] h-auto object-contain'
					style={{
						transform: 'scale(2) translateY(7%) translateX(10%)',
					}}
					width={400}
					height={400}
				/>
				<Image
					src='/images/ManDesktop.png'
					alt='3D Human'
					className='hidden xl:block w-auto h-[80vh] lg:scale-1 xl:scale-1 2xl:scale-[1.2] object-contain'
					style={{
						transform: 'scale(1.3) translateY(12%) translateX(-3%)',
					}}
					width={600}
					height={800}
				/>
			</div>
		</Layout>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
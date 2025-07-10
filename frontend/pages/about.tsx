import Button from '@/components/Button/Button';
import Feedback from '@/components/Feedback/Feedback';
import Layout from '@/components/Layout/Layout';
import Text from '@/components/Text/Text';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const formRef = useRef<HTMLDivElement>(null);
	const { t } = useTranslation('about');

	const handleOpenForm = () => {
		setIsFormOpen(true);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				formRef.current &&
				!formRef.current.contains(event.target as Node)
			) {
				setIsFormOpen(false);
			}
		};

		if (isFormOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isFormOpen]);

	return (
		<Layout>
			<section
				id='about'
				className='pb-4 px-4 max-w-5xl mx-auto text-white-custom  xl:h-[calc(100vh-218px)] h-[calc(100vh-200px)] overflow-auto'
			>
				<Text
					as='h2'
					weight='bold'
					className='text-3xl md:text-4xl mb-6'
				>
					{t('heading')}
				</Text>
				<Text className='text-lg mb-8'>{t('intro')}</Text>

				<Text className='text-lg mb-6'>{t('values')}</Text>

				<div className='grid md:grid-cols-2 gap-8 mb-12'>
					<div>
						<Text as='h3' className='text-xl font-semibold mb-2'>
							{t('what_we_do_title')}
						</Text>
						<ul className='list-disc list-inside space-y-1'>
							{(
								t('what_we_do_list', {
									returnObjects: true,
								}) as []
							).map((item: string, i: number) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>

					<div>
						<Text as='h3' className='text-xl font-semibold mb-2'>
							{t('why_us_title')}
						</Text>
						<ul className='list-disc list-inside space-y-1'>
							{(
								t('why_us_list', { returnObjects: true }) as []
							).map((item: string, i: number) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
				</div>

				<Text
					as='blockquote'
					className='italic text-lg border-l-4 border-pink-500 pl-4 mb-8'
				>
					{t('quote')}
				</Text>

				<div className='text-center mt-12'>
					<Text className='text-xl font-semibold mb-4'>
						{t('project_question')}
					</Text>
					<Text className='text-lg mb-6'>{t('project_invite')}</Text>
					<Button
						text={t('consult_button')}
						type='mobilemenu'
						active
						className='max-w-[385px] m-auto'
						onClick={handleOpenForm}
					/>
				</div>
				{isFormOpen && (
					<div className='fixed inset-0 flex items-center justify-center bg-[#00000050] z-[2000] xl:backdrop-blur-md'>
						<div ref={formRef} className='relative'>
							<Feedback onClose={() => setIsFormOpen(false)} />
						</div>
					</div>
				)}
			</section>
		</Layout>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['about', 'common'])),
		},
	};
}

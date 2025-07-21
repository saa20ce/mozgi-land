import Layout from '@/components/Layout/Layout';
import MainMenu from '@/components/MainMenu/MainMenu';
import QuestionMenu from '@/components/Questions/QuestionsMenu';
import { useState } from 'react';
import { getQuestions } from '@/lib/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface QuestionApiData {
	id: number;
	title: string;
	description: string | null;
}

interface Question {
	id: number;
	question: string;
	answer: string;
}

export async function getStaticProps({ locale }: { locale: string }) {
	const translations = await serverSideTranslations(locale, ['common']);
	try {
		const data = await getQuestions(locale);
		const formattedQuestions = data.map((item: QuestionApiData) => ({
			id: item.id,
			question: item.title,
			answer: item.description || '',
		}));
		return {
			props: {
				initialQuestions: formattedQuestions,
				...translations,
			},
      revalidate: 3600, 
		};
	} catch (error) {
		console.error('Ошибка при загрузке вопросов:', error);
		return {
			props: {
				initialQuestions: [],
				...translations,
			},
      revalidate: 3600, 
		};
	}
}

export default function QuestionsPage({
	initialQuestions,
}: {
	initialQuestions: Question[];
}) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<Layout>
			<div className='flex flex-col xl:flex-row xl:mt-[-12px] h-screen-minus-195 pb-3 w-full overflow-hidden'>
				<div className='md:w-1/2 space-y-6 xl:flex-center 2xl:ml-[-100px]'>
					<MainMenu
						isMobileMenuOpen={isMobileMenuOpen}
						setIsMobileMenuOpen={setIsMobileMenuOpen}
					/>
				</div>
				<QuestionMenu initialQuestions={initialQuestions} />
			</div>
		</Layout>
	);
}

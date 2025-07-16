import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import { getQuestions } from '@/lib/api';

interface Question {
	id: number;
	question: string;
	answer: string;
}

interface QuestionMenuProps {
	initialQuestions: Question[];
}

export default function QuestionMenu({ initialQuestions }: QuestionMenuProps) {
	const [questions, setQuestions] = useState<Question[]>(initialQuestions);
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const { t, i18n } = useTranslation('common');

	useEffect(() => {
		async function fetchWorks() {
			const data = await getQuestions(i18n.language);
			const formattedQuestions = data.map((item) => ({
				id: item.id,
				question: item.title,
				answer: item.description || '',
			}));
			setQuestions(formattedQuestions);
		}

		fetchWorks();
	}, [i18n.language]);

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='w-full xl:w-1/2 xl:max-w-[420px] 2xl:max-w-[620px]  overflow-auto scrollbar-none rounded-t-lg py-3 xl:mt-3 '>
				<div className='flex flex-col w-full 2xl:h-full gap-2 2xl:pl-[100px] '>
					{questions.length === 0 ? (
						<p className='text-red-500 flex-center'>
							{t('questionMenu.noQuestion')}
						</p>
					) : (
						questions.map((item, index) => (
							<div
								key={item.id}
								className='bg-[rgba(255,255,255,0.2)] rounded-lg'
							>
								<button
									className='w-full flex justify-between items-center text-white text-left p-4 rounded-lg transition duration-300 hover:bg-[rgba(255,255,255,0.3)]'
									onClick={() => toggleQuestion(index)}
								>
									{item.question}
									<FaChevronDown
										className={`transition-transform duration-300 ${
											openIndex === index
												? 'rotate-180'
												: ''
										}`}
									/>
								</button>
								<div
									className={`overflow-hidden transition-all duration-500 ${
										openIndex === index
											? 'max-h-[200px] p-4'
											: 'max-h-0'
									}`}
								>
									<p className='text-gray-200'>
										{item.answer}
									</p>
								</div>
							</div>
						))
					)}
				</div>
		</div>
	);
}

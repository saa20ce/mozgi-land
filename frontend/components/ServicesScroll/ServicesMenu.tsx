import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button/Button';
import { FaCog } from 'react-icons/fa';
import Text from '../Text/Text';
import { useTranslation } from 'next-i18next';
import { getServices } from '@/lib/api';
import Feedback from '../Feedback/Feedback';

interface Service {
	id: number;
	title: string;
	categories: Category[];
}

interface Category {
	title: string;
	items: string[];
}

interface ServicesMenuProps {
	initialServices: Service[];
}

export default function ServicesMenu({ initialServices }: ServicesMenuProps) {
	const [services, setServices] = useState<Service[]>(initialServices);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const formRef = useRef<HTMLDivElement>(null);
	const { t, i18n } = useTranslation('common');

	useEffect(() => {
		async function fetchWorks() {
			const data = await getServices(i18n.language);
			const formattedServices = data.map((item) => ({
				id: item.id,
				title: item.title,
				categories: item.items,
			}));
			setServices(formattedServices);
		}

		fetchWorks();
	}, [i18n.language]);

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (isFormOpen && formRef.current && !formRef.current.contains(event.target as Node)) {
					setIsFormOpen(false);
				}};
	
			if (isFormOpen) {
				document.addEventListener('mousedown', handleClickOutside);
			}
	
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [isFormOpen,  setIsFormOpen]);

	return (
			<div className='flex justify-center items-start xl:items-center  w-full xl:w-1/2 xl:max-w-[420px] 2xl:max-w-[620px] 2xl:pl-[100px] overflow-auto scrollbar-none rounded-t-lg pb-3'>
					<div className='flex flex-col w-full xl:pt-3 pb-3  xl:overflow-hidden gap-2 '>
						{services.length === 0 ? (
							<p className='text-red-500 flex-center'>
								{t('servicesMenu.noService')}
							</p>
						) : (
							services.map((service) => (
								<div
									key={service.id}
									className='p-3 bg-[#3B404F] text-white rounded-xl flex items-center justify-between md:flex-row md:items-center gap-4 '
								>
									<div className='flex-1'>
										<Text
											as='h2'
											size='md'
											weight='semibold'
											className='font-semibold flex items-center gap-2'
										>
											<FaCog className='text-white text-2xl' />
											{service.title}
										</Text>
										<ol className='list-decimal list-inside mt-2 ml-4 space-y-2'>
											{service.categories.map(
												(
													{ title, items },
													categoryIndex,
												) =>
													title.trim() === '' ? (
														items.map(
															(item, itemIndex) => (
																<li
																	key={`${categoryIndex}-${itemIndex}`}
																	className='list-disc'
																>
																	<Text as='span' size='sm' color='white'>{item}</Text>
																</li>
															),
														)
													) : (
														<li key={title}>
															<Text
																as='span'
																size='sm'
																color='white'
																className='font-medium'
															>
																{title}
															</Text>
															<ol className='list-disc list-inside ml-5 mt-1 space-y-1'>
																{items.map(
																	(item) => (
																		<li key={item} >
																			<Text as='span' size='sm' color='white'>{item}</Text>
																		</li>
																	),
																)}
															</ol>
														</li>
													),
											)}
										</ol>
									</div>
									<Button
										text={t('servicesMenu.open')}
										type='service'
										onClick={() => setIsFormOpen(true)}
										className='text-nowrap'
									/>
									{isFormOpen && (
										<div className='fixed inset-0 flex items-center justify-center backdrop-blur-lg z-[2000] xl:backdrop-blur-md'>
											<div ref={formRef} className='relative'>
												<Feedback onClose={() => setIsFormOpen(false)} />
											</div>
										</div>
									)}
								</div>
							))
						)}
				</div>
			</div>
	);
}

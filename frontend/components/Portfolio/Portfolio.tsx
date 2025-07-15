import { useEffect, useState } from 'react';
import Text from '../Text/Text';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { getWorks } from '@/lib/api';
import Gallery from '@/components/Gallery/Gallery';

interface Work {
	id: number;
	title: string;
	subtitle: string;
	category: string;
	preview: string;
	images: Images[];
}

interface Images {
	id: number;
	image: string;
}

interface PortfolioProps {
	initialWorks: Work[];
}

export default function Portfolio({ initialWorks }: PortfolioProps) {
	const [works, setWorks] = useState<Work[]>(initialWorks);
	const [activeGalleryId, setActiveGalleryId] = useState<number | null>(null);
	const { t, i18n } = useTranslation('common');

	useEffect(() => {
		async function fetchWorks() {
			const data = await getWorks(i18n.language);
			const formattedWorks = data.map((item) => ({
				id: item.id,
				title: item.title,
				subtitle: item.description || '',
				category: item.type,
				preview: item.thumbnail || '/images/project.png',
				images: item.images,
			}));
			setWorks(formattedWorks);
		}

		fetchWorks();
	}, [i18n.language]);

	return (
		<div className='rounded-t-lg overflow-hidden h-screen-minus-195 flex flex-col'>
			{works.length === 0 ? (
				<div className='flex-center h-full'>
					<p className='text-red-500'>{t('portfolioBtn.noWorks')}</p>
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-max pb-3 overflow-y-auto  flex-grow scrollbar-none '>
					{works.map((project) => (
						<div
							key={project.id}
							className='relative bg-[#7b7c7e] h-[258px] 2xl:h-[374px] rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out'
							onClick={() => setActiveGalleryId(project.id)}
						>
							<Image
								src={`http://127.0.0.1:8000${project.preview}`}
								alt={project.title}
								className='absolute inset-0 w-full h-full object-cover object-center'
								width={300}
								height={200}
								priority
							/>
							<div className='absolute bottom-0 w-full bg-black bg-opacity-50 py-2 px-4 rounded-b-lg text-white z-10'>
								<Text as='h3' size='xl' weight='medium'>
									{project.title}
								</Text>
								<Text as='p' size='lg'>
									{project.subtitle}
								</Text>
							</div>
						</div>
					))}
					{activeGalleryId !== null && (
						<Gallery
							images={
								works.find((w) => w.id === activeGalleryId)
									?.images || []
							}
							onClose={() => setActiveGalleryId(null)}
						/>
					)}
				</div>
			)}
		</div>
	);
}

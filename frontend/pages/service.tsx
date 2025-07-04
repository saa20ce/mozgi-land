import Layout from '@/components/Layout/Layout';
import MainMenu from '@/components/MainMenu/MainMenu';
import ServicesMenu from '@/components/ServicesScroll/ServicesMenu';
import { useState } from 'react';
import { getServices } from '@/lib/api';

interface ServiceApiData {
	id: number;
	title: string;
	items: string[] | null;
}

interface Service {
	id: number;
	title: string;
	categories: string[];
}

export async function getServerSideProps() {
	try {
		const data = await getServices();
		const formattedServices = data.map((item: ServiceApiData) => ({
			id: item.id,
			title: item.title,
			categories: item.items || [],
		}));
		return {
			props: {
				initialServices: formattedServices,
			},
		};
	} catch (error) {
		console.error('Ошибка при загрузке сервисов:', error);
		return {
			props: {
				initialServices: [],
			},
		};
	}
}

export default function ServicesPage({
	initialServices,
}: {
	initialServices: Service[];
}) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<Layout>
			<div className='flex flex-col md:flex-row items-center h-[calc(100vh-136px)] w-full overflow-hidden'>
				<div className='md:w-1/2 space-y-6'>
					<MainMenu
						isMobileMenuOpen={isMobileMenuOpen}
						setIsMobileMenuOpen={setIsMobileMenuOpen}
					/>
				</div>
				<ServicesMenu initialServices={initialServices} />
			</div>
		</Layout>
	);
}

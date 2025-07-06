import Link from 'next/link';
import { useRouter } from 'next/router';
import arrow from '@/public/images/arrow.svg'
import Image from 'next/image';

export default function Breadcrumbs() {
	const router = useRouter();
	const asPath = router.asPath;

	const namePath: Record<string, string> = {
		ourworks: 'Портфолио',
		questions: 'Вопросы',
		service: 'Услуги',
    about: 'О нас'
	};

	const segments = asPath.split('/').filter(Boolean);
	const breadcrumbs = segments.map((segment, i) => {
		const href = '/' + segments.slice(0, i + 1).join('/');
		return { name: namePath[segment], href };
	});
	console.log(breadcrumbs);

	return (
		!!breadcrumbs.length && (
			<nav className='flex items-center gap-2 mt-3 py-3 px-5 bg-[#F6F6F633] w-full h-[52 px] rounded-full text-white-custom text-[18px]/[28px]'>
				<Link href='/'>Главная</Link>
				{breadcrumbs.map((crumb, i) => (
					<span key={crumb.href} className='flex items-center gap-2 '>
						<Image alt='стрелка' width={10} height={10} src={arrow}/>
						{i === breadcrumbs.length - 1 ? (
							<span>{crumb.name}</span>
						) : (
							<Link href={crumb.href}>{crumb.name}</Link>
						)}
					</span>
				))}
			</nav>
		)
	);
}

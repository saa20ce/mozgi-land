import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function Breadcrumbs() {
	const router = useRouter();
	const asPath = router.asPath;
	const { t } = useTranslation('common');

	const segments = asPath.split('/').filter(Boolean);
	const breadcrumbs = segments.map((segment, i) => {
		const href = '/' + segments.slice(0, i + 1).join('/');
		return {
			name: t(`breadcrumbs.${segment}`, { defaultValue: segment }),
			href,
		};
	});

	return (
		!!breadcrumbs.length && (
			<nav className='flex items-center gap-2 mt-3 py-3 px-5 bg-[#F6F6F633] w-full h-[52 px] rounded-full text-white-custom text-[18px]/[28px]'>
				<Link href='/'>{t('breadcrumbs.home')}</Link>
				{breadcrumbs.map((crumb, i) => (
					<span key={crumb.href} className='flex items-center gap-2 '>
						<Image 
						src="/images/arrow.svg"
						alt={t('breadcrumbs.arrow')}
						width={10} 
						height={10}
						loading='eager'
						priority
						unoptimized
						/> 
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

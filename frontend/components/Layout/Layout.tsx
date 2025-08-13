import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div
			className='relative flex flex-col w-full overflow-hidden'
			style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
		>
			<video
				autoPlay
				muted
				loop
				playsInline
				className='fixed lg:hidden top-0 left-0 w-full h-full object-cover z-[-1]'
			>
				<source src='/videos/2.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<video
				autoPlay
				muted
				loop
				playsInline
				className='hidden lg:block fixed top-0 left-0 w-full h-full object-cover z-[-1]'
			>
				<source src='/videos/1.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<div className='flex flex-col w-full flex-grow xl:px-12 min-h-0'>
				<div className='container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px] pt-3 md:pt-5 xl:px-0'>
					<Header />
					<Breadcrumbs />
				</div>
				<main className='flex-grow  min-h-0 '>
					<div
						className='container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px] xl:px-0 min-h-0 h-full mt-3 -mb-3 overflow-y-auto
rounded-t-lg scrollbar-none'
					>
						{children}
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;

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
			{/* <div className='background inset-0 '></div> */}
      			<video
				autoPlay
				muted
				loop
				playsInline
				className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'
			>
				<source src='/videos/background.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<div className='flex flex-col w-full flex-grow xl:px-12 min-h-0'>
				<div className='container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px] pt-3 md:pt-5 xl:px-0'>
					<Header />
					<Breadcrumbs />
				</div>
				 <main className="flex-grow  min-h-0 ">
					<div className='container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px] xl:px-0 min-h-0 h-full mt-3 -mb-3 overflow-y-auto
scrollbar-none rounded-t-lg'>
						{children}
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

// const Layout = ({ children }: LayoutProps) => {
// 	return (
// 		<div
// 			className='relative flex flex-col w-full'
// 			style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
// 		>
// 			<video
// 				autoPlay
// 				muted
// 				loop
// 				playsInline
// 				className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'
// 			>
// 				<source src='/videos/background.mp4' type='video/mp4' />
// 				Your browser does not support the video tag.
// 			</video>

// 			<div className='flex flex-col flex-grow w-full xl:px-12 '>
// 				<div className='container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px] pt-3 md:pt-5 xl:px-0'>
// 					<Header />
// 					<Breadcrumbs />
// 				</div>

// 				<main className='flex-grow overflow-y-auto scrollbar-none'>
// 					<div className='container xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1620px] xl:px-0'>
// 						{children}
// 					</div>
// 				</main>
// 			</div>

// 			<Footer />
// 		</div>
// 	);
// };

export default Layout;

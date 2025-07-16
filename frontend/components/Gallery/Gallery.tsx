import { Carousel } from 'antd';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

type GalleryProps = {
	images: {
    id: number;
    image: string;
  }[];
	onClose: () => void;
};



export default function Gallery({ images, onClose }: GalleryProps) {
	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black flex-center'
			style={{ height: 'calc(var(--vh) * 100)' }}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
          e.stopPropagation();
					onClose();
				}
			}}
		>
			<div
				className='relative rounded-xl overflow-hidden'
				style={{ width: '95vw' }}
			>
				<Carousel
					dots
					infinite
					arrows
					draggable
					style={{ height: '100%', width: '100%' }}
					dotPosition='bottom'
				>
					{images.map(({image: src, id}) => (
						<div
							key={id}
							className='flex items-center justify-center'
							style={{ height: 'calc(var(--vh) * 80)' }} // или '100%'
						>
							<Image
								src={`http://localhost:8000${src}`}
								alt={`Image ${id}`}
								width={1000}
								height={800}
								style={{
									objectFit: 'contain',
									maxHeight: '100%',
									maxWidth: '100%',
								}}
								draggable={false}
								priority={id === 1}
							/>
						</div>
					))}
				</Carousel>
			</div>

			<button
				onClick={(e) => {
					e.stopPropagation();
					onClose();
				}}
				aria-label='Close gallery'
				className='absolute top-4 right-4 p-2 hover:scale-125 rounded-full transition-transform duration-300 z-50 text-white'
			>
				<IoMdClose size={32} />
			</button>
		</div>
	);
}

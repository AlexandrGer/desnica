import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

interface SliderProps {
	children: React.ReactNode
}

export function Slider({ children }: SliderProps) {
	return (

		<Swiper
			slidesPerView={3}
			// spaceBetween={1}
			slidesPerGroup={3}
			pagination={{
				clickable: true,
			}}
			breakpoints={{
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 50,
				},
				1920: {
					// slidesPerView: 3,
					spaceBetween: 25,
				},
			}}
			modules={[Pagination]}
			className="mySwiper"
		>
			{children}
		</Swiper>





	);
};
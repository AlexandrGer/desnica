import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Card } from '../Card/Card';

export function Slider() {
	return (

		<Swiper
			slidesPerView={3}
			spaceBetween={1}
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
			}}
			modules={[Pagination]}
			className="mySwiper"
		>
			{/* <SwiperSlide><Card /></SwiperSlide>
			<SwiperSlide><Card /></SwiperSlide>
			<SwiperSlide><Card /></SwiperSlide>
			<SwiperSlide><Card /></SwiperSlide>
			<SwiperSlide><Card /></SwiperSlide>
			<SwiperSlide><Card /></SwiperSlide>
			<SwiperSlide><Card /></SwiperSlide>
			<SwiperSlide><Card /></SwiperSlide> */}
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
			<SwiperSlide>Slide 6</SwiperSlide>
			<SwiperSlide>Slide 7</SwiperSlide>
			<SwiperSlide>Slide 8</SwiperSlide>
			<SwiperSlide>Slide 9</SwiperSlide>
		</Swiper>






		// <Swiper
		// 	width={100}
		// 	spaceBetween={50}
		// 	slidesPerView={3}
		// 	onSlideChange={() => console.log('slide change')}
		// // onSwiper={(swiper) => console.log(swiper)}
		// >
		// 	<SwiperSlide>1</SwiperSlide>
		// 	<SwiperSlide>2</SwiperSlide>
		// 	<SwiperSlide>3</SwiperSlide>
		// 	<SwiperSlide>4</SwiperSlide>
		// 	...
		// </Swiper>
	);
};
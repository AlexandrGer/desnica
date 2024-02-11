import React from "react";
import './Video.css';
import image from '../../images/video-header-img.jpg';
import { SectionVideo } from "../../components/SectionVideo/SectionVideo";
import { Social } from "../../components/Social/Social";
import { videoCards } from "../../videoCards";
import { Card } from "../../components/Card/Card";
import { SwiperSlide } from "swiper/react";


export function Video() {
	return (
		<div className="video">
			<h1 className='video__title'>Видео</h1>
			<img
				src={image}
				alt="Облака"
				className="video__image" />

			<SectionVideo title='Видеогид по монастырям Москвы' >
				{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
			</SectionVideo>
			<SectionVideo title='Библиотека' >
				{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
			</SectionVideo>
			<SectionVideo title='Богослужения с переводом на РЖЯ' >
				{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
			</SectionVideo>
			<SectionVideo title='СМИ о центре “Десница”' >
				{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
			</SectionVideo>
			<SectionVideo title='Фильмы и предачи с субтитрами от наших партнёров' >
				{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
			</SectionVideo>

			<Social />
		</div >
	)
}
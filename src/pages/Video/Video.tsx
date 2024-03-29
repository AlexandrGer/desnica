import React from "react";
import "./Video.css";
import image from "../../images/video-header-img.jpg";
import { SectionVideo } from "../../components/SectionVideo/SectionVideo";
import { Social } from "../../components/Social/Social";
import { videoCards } from "../../videoCards";
import { Card } from "../../components/Card/Card";
import { SwiperSlide } from "swiper/react";
import { Route, Routes } from "react-router-dom";
import { PlaylistVideo } from "../../components/PlaylistVideo/PlaylistVideo";
import { OneCard } from "../../components/OneCard/OneCard";

export function Video() {
  return (
    <div className="video">
      <h1 className="video__title">Видео</h1>
      <img src={image} alt="Облака" className="video__image" />

      <div className="video__container">
        {/* <Routes>
					<Route path="/desnica/" element={
						<>
							<SectionVideo titleSection='Видеогид по монастырям Москвы' >
								{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
							</SectionVideo>
							<SectionVideo titleSection='Библиотека' >
								{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
							</SectionVideo>
							<SectionVideo titleSection='Богослужения с переводом на РЖЯ' >
								{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
							</SectionVideo>

							<SectionVideo titleSection='СМИ о центре “Десница”' >
								{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
							</SectionVideo>

							<SectionVideo titleSection='Фильмы и предачи с субтитрами от наших партнёров' >
								{videoCards.map(videoCard => <SwiperSlide key={videoCard.id}><Card videoCard={videoCard} /></SwiperSlide>)}
							</SectionVideo>
						</>}>
					</Route>
					<Route path='/desnica/:nameSection' element={
						<PlaylistVideo>
							{videoCards.map(videoCard => <Card videoCard={videoCard} key={videoCard.id} />)}
						</PlaylistVideo>}>
					</Route> */}
        {/* <Route path='/descnica/:nameSection/:nameCard' element={<OneCard />}>
					</Route> */}
        {/* </Routes> */}
        <OneCard />
      </div>
      <Social />
    </div>
  );
}

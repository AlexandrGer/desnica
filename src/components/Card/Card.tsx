import React from "react";
import './Card.css';
import cyrillic from '../../images/Cyrillic.png';
import icon_video from '../../images/icon-video.svg';
import { ICard } from "../../models";

interface VideoCardProps {
	videoCard: ICard
}

export function Card({ videoCard }: VideoCardProps) {
	return (
		<div className='card'>
			<div className="card__container-img">
				<img src={cyrillic} alt="Кириллица" className="card__img" />
				<img src={icon_video} alt="Иконка видео" className="card__icon" />
			</div>

			<p className="card__title">{videoCard.title}</p>
			<span className="card__caption">{videoCard.views} тыс. просмотров · {videoCard.posted} месяца назад</span>
		</div>
	)
}
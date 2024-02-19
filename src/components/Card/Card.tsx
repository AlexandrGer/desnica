import React from "react";
import "./Card.css";
import cyrillic from "../../images/Cyrillic.jpg";
import icon_video from "../../images/icon-video.svg";
import { ICard } from "../../models";
import "swiper/css";
import { Link, useParams } from "react-router-dom";

interface VideoCardProps {
  videoCard: ICard;
}

export function Card({ videoCard }: VideoCardProps) {
  let { nameSection, nameCard } = useParams();
  nameCard = String(videoCard.title);
  return (
    <div className="card">
      <div className="card__container-img">
        <Link to={`/desnica/${nameSection}/${nameCard}`}>
          <img src={cyrillic} alt="Кириллица" className="card__img" />
          <img src={icon_video} alt="Иконка видео" className="card__icon" />
        </Link>
      </div>

      <p className="card__title">{videoCard.title}</p>
      <p className="card__caption">
        {videoCard.views} тыс. просмотров · {videoCard.posted} месяца назад
      </p>
    </div>
  );
}

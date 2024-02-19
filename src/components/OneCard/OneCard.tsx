import React from "react";
import cyrillic from "../../images/Cyrillic.jpg";
import icon_video from "../../images/icon-video.svg";
import { useParams } from "react-router-dom";
import "../OneCard/OneCard.css";
import yotube from "../../images/Youtube.svg";
import rutube from "../../images/Rutube.svg";
import vkVideo from "../../images/VK-Video.svg";

export function OneCard() {
  console.log(useParams());
  return (
    <div className="one-card">
      <div>
        <div className="one-card__container-img">
          <img src={cyrillic} alt="" className="one-card__img" />
          <img src={icon_video} alt="" className="one-card__icon" />
        </div>
        <div className="one-card__container-player">
          <button className="button-player">Выбрать плеер</button>
          <ul className="links-players">
            <li className="link-player">
              <a href="#">
                <img src={yotube} alt="" />
              </a>
            </li>
            <li className="link-player">
              <a href="#">
                <img src={rutube} alt="" />
              </a>
            </li>
            <li className="link-player">
              <a href="#">
                <img src={vkVideo} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="one-card__container">
        <p className="one-card__title">
          21. Катехизис для глухих. Кто такая Богородица?
        </p>
        <p className="one-card__caption">
          1,2 тыс. просмотров · 2 месяца назад
        </p>
        <div className="one-card__description">
          <p className="one-card__paragraph">
            В августе 2016 года при Центре "Десница" начал свою деятельность
            Православный YouTube канал для глухих и слабослышащих "Десница",
            который выпускает широкий спектр тематических видеосюжетов на
            русском жестовом языке с озвучкой и субтитрами.
          </p>
          <p className="one-card__paragraph">
            В октябре 2018 года был создан дополнительный филиал Центра
            "Десница" при храме святого благоверного князя Александра Невского
            при МГИМО на Юго-Западной.
          </p>
          <p className="one-card__paragraph">
            Центр "Десница" осуществляет перевод богослужений на русский
            жестовый язык и миссионерскую деятельность среди глухих и
            слабослышащих людей, в том числе через Православный канал "Десница",
            проводит просветительские и катехизаторские беседы, помогает
            церковным общинам глухих, привлекает специалистов со знанием
            жестового языка и организует церковные курсы изучения русского
            жестового языка, сотрудничает с другими общественными организациями,
            реализует разнообразные проекты, которые знакомят глухих и
            слабослышащих людей с православной верой и жизнью Церкви.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import './Social.css';
import youtube from '../../images/Youtube.svg';
import rutube from '../../images/Rutube.svg';
import vkontakte from '../../images/VK.svg';
import telegram from '../../images/Telegram.svg';


export function Social() {
	return (
		<div className="social">
			<p className="social__text">Мы в социальных сетях</p>
			<ul className="social__links">
				<li className="social__link">
					<a href="#">
						<img src={youtube} alt="youtube" className="social__icon" />
					</a>
				</li>
				<li className="social__link">
					<a href="#">
						<img src={rutube} alt="rutube" className="social__icon" />
					</a>
				</li>
				<li className="social__link">
					<a href="#">
						<img src={vkontakte} alt="vkontakte" className="social__icon" />
					</a>
				</li>
				<li className="social__link">
					<a href="#">
						<img src={telegram} alt="telegram" className="social__icon" />
					</a>
				</li>
			</ul>

		</div>
	)
}
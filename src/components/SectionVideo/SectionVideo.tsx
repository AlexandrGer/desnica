import React from "react";
import './SectionVideo.css';
import { Slider } from "../Slider/Slider";

interface SectionVideoProps {
	title: string,
	children: React.ReactNode
}

export function SectionVideo({ title, children }: SectionVideoProps) {
	return (
		<section className="section-video">
			<div className="section-video__container">
				<h2 className="section-video__title">{title}</h2>
				<button
					type="button"
					className="button__see-all">
					Смотреть все
				</button>
			</div>

			<div className="section-video__cards">
				<Slider>
					{children}
				</Slider>


			</div>
		</section>

	)
}
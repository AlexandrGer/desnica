import React from "react";
import './SectionVideo.css';
import { Slider } from "../Slider/Slider";
import { Link, useParams } from "react-router-dom";

interface SectionVideoProps {
	title: string,
	children: React.ReactNode
}

export function SectionVideo({ title, children }: SectionVideoProps) {
	let { nameSection } = useParams();
	nameSection = title;
	console.log(nameSection)
	return (
		<section className="section-video">
			<div className="section-video__container">
				<h2 className="section-video__title">{title}</h2>
				<Link to={nameSection}>
					<button
						type="button"
						className="button__see-all">
						Смотреть все
					</button>
				</Link>
			</div>

			<div className="section-video__cards">
				<Slider>
					{children}
				</Slider>
			</div>
		</section>

	)
}
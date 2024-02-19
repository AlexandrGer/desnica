import React from "react";
import './SectionVideo.css';
import { Slider } from "../Slider/Slider";
import { Link, useParams } from "react-router-dom";

interface SectionVideoProps {
	titleSection: string,
	// children: React.ReactNode
	children: any,
}

export function SectionVideo({ titleSection, children }: SectionVideoProps) {
	let { nameSection } = useParams();
	nameSection = titleSection;
	return (
		<section className="section-video">
			<h2 className="section-video__title">{titleSection}</h2>
			<Link to={nameSection} className="section-video__link">
				<button
					type="button"
					className="button__see-all">
					Смотреть все
				</button>
			</Link>

			<div className="section-video__cards">
				<Slider>
					{children}
				</Slider>
			</div>
		</section>

	)
}
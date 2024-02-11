import React from "react";
import { Link, useParams } from "react-router-dom";
import './PlaylistVideo.css';


interface PlaylistVideoProps {
	children: React.ReactNode
}

export function PlaylistVideo({ children }: PlaylistVideoProps) {
	const { nameSection } = useParams();
	return (
		<section className="section-playlist">
			<div className="section-playlist__container">
				<h2 className="section-playlist__title">{nameSection}</h2>
				<Link to='/desnica'>
					<button
						type="button"
						className="button__back">
						Назад
					</button>
				</Link>
			</div>

			<div className="section-playlist__cards">
				{children}
			</div>
		</section>
	)
}
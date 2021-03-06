import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/w185/';
function Row({ title, fetchUrl }) {
	const [ movies, setMovies ] = useState([]);
	// A snippet of code which runs based on a specific condition/variable
	useEffect(
		() => {
			// if [], run the code once but dont run it again.
			// if [] <= is not black it will load everytime when this changes
			async function fetchData() {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
				return request;
			}
			fetchData();
		},
		[ fetchUrl ]
	);
	console.table(movies);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						className="row__poster"
						key={movie.id}
						src={`${base_url}${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}
export default Row;

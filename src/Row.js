import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
	const [ movies, setMovies ] = useState([]);
	const [ trailerUrl, setTrailerUrl ] = useState([]);
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

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1
		}
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			// hid the vid if we clicked
			setTrailerUrl("")
		} else {
			movieTrailer(movie?.name || "")
			.then(url => {
				//https://www.youtube.com/watch?v=XtMThy8QKqU&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&index=4
				// the code below is going to search for anything after v=
				const urlParams = new URLSearchParams(new URL(url).serach);
				setTrailerUrl(urlParams.get("v"));
			})
			.catch(error => console.log(error))
		}
	}
	console.log(setTrailerUrl)

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
					className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
					onClick={() => handleClick(movie)}
					key={movie.id}
					src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
					alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
		</div>
	);
}
export default Row;

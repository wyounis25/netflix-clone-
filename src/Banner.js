import React, { useEffect, useState } from 'react';
import axios from './axios';
import request from './request';
import "./Banner.css"

function Banner() {
	const [ movie, setMovie ] = useState([]);
    const base_url = 'https://image.tmdb.org/t/p/original/';
	useEffect(() => {
		async function fetchData() {
			const requests = await axios.get(request.netflixOrgin);
			setMovie();
			// requests.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
			// you have to do -1])
			//<< [] Math.floor(Math.random() * request.data.results.length -1)
			// you have to do -1 so it does not go over.
			setMovie(requests.data.results[Math.floor(Math.random() * requests.data.results.length - 1)]);
		}
		fetchData();
    }, []);
    
    function truncate(str,n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    
	return (
        <header 
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                ${base_url}${movie?.backdrop_path}
            )`,
            backgroundPosition: "center center"
        }}
        >
				{/* background immage for the header */}
			<div className="banner__contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
				{/* title */}
				{/* div has 2 buttons */}
				{/* description  */}
			</div>
            <div className= "banner--fadeBottom"/>
		</header>
	);
}

export default Banner;

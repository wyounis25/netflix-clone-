const APIKEY = '31b48e3ef70f8f3ae2af715b506b73cf';

const requests = {
	trending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
	netflixOrgin: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
	topRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
	actionMovie: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
	comedy: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
	horror: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
	romance: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
	document: `/discover/movie?api_key=${APIKEY}&with_genres=99`
};

export default requests;

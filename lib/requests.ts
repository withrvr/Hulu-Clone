const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests: {
	[key: string]: {
		title: string;
		url: string;
	};
} = {
	trending: {
		title: "Trending",
		url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	topRated: {
		title: "Top-Rated",
		url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	action: {
		title: "Action",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	comedy: {
		title: "Comedy",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	horror: {
		title: "Horror",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	romance: {
		title: "Romance",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	mystery: {
		title: "Mystery",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	sciFi: {
		title: "Sci-Fi",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	western: {
		title: "Western",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	animation: {
		title: "Animation",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	tvMovie: {
		title: "TV-Movie",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
};

export default requests;

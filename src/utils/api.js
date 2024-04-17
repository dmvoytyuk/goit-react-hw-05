import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.defaults.headers.common["Authorization"] =
	"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTc3NTBiODZjZTk0YTg1YzdmOTQzZTg3YzY4ZGMwMSIsInN1YiI6IjY2MTA5NTFiMWYzMzE5MDE3ZGMxNGZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ItL7jeocAHBSnXsuxhFceW9N9MqD432o0goaT4iSOI";

export const getTrendingMovies = async (time_window) => {
	const movies = await axiosInstance.get(`/trending/movie/${time_window}`);
	return movies.data;
};

export const getMovieDetails = async (movieID) => {
	const movie = await axiosInstance.get(`/movie/${movieID}`);
	return movie.data;
};

export const getMovieReviews = async (movieID) => {
	const movie = await axiosInstance.get(`/movie/${movieID}/reviews`);
	return movie.data;
};

export const getMovieCast = async (movieID) => {
	const movie = await axiosInstance.get(`/movie/${movieID}/credits`);
	return movie.data;
};

export const getMoviesList = async (query) => {
	const movie = await axiosInstance.get(`/search/movie?query=${query}`);
	return movie.data;
};

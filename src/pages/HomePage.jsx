import { useEffect, useState } from "react";
import { getTrendingMovies } from "../utils/api";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
	const [trendingMovies, setTrendingMovies] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchTrendingMovies = async () => {
			try {
				setIsLoading(true);
				const fetchedTrendingMovies = await getTrendingMovies("day");
				setTrendingMovies(fetchedTrendingMovies.results);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTrendingMovies();
	}, []);

	return (
		<>
			<h1>Trending Movies Today</h1>
			{trendingMovies && <MovieList moviesList={trendingMovies} />}
			{isLoading && <Loader />}
		</>
	);
};

export default HomePage;

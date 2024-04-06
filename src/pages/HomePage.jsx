import { useEffect, useState } from "react";
import { getTrendingMovies } from "../utils/api";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
	const [trendingMovies, setTrendingMovies] = useState(null);

	useEffect(() => {
		const fetchTrendingMovies = async () => {
			try {
				const fetchedTrendingMovies = await getTrendingMovies("day");
				setTrendingMovies(fetchedTrendingMovies);
			} catch (error) {
				console.log(error);
			} finally {
			}
		};
		fetchTrendingMovies();
	}, []);

	return (
		<>
			<h1>Trending Movies today</h1>
			{trendingMovies && <MovieList moviesList={trendingMovies.results} />}
		</>
	);
};

export default HomePage;
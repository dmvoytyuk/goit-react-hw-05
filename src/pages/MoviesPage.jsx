import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesList } from "../utils/api";
import Loader from "../components/Loader/Loader";

const MoviesPage = () => {
	const [movies, setMovies] = useState(null);
	// const [query, setQuery] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const query = searchParams.get("query");
	useEffect(() => {
		if (query) {
			const fetchMovies = async (query) => {
				try {
					setIsLoading(true);
					const fetchedMovies = await getMoviesList(query);
					setMovies(fetchedMovies.results);
				} catch (error) {
					console.log(error);
				} finally {
					setIsLoading(false);
				}
			};
			fetchMovies(query);
		}
	}, [query]);

	const searchMovies = (newQuery) => {
		if (query != newQuery) {
			setSearchParams({ query: newQuery });
			setMovies(null);
		}
	};

	return (
		<>
			<SearchForm searchMovies={searchMovies} />
			{movies && <MovieList moviesList={movies} />}
			{isLoading && <Loader />}
		</>
	);
};

export default MoviesPage;

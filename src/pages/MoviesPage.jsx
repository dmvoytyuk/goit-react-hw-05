import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesList } from "../utils/api";

const MoviesPage = () => {
	const [movies, setMovies] = useState(null);
	// const [query, setQuery] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get("query");
	useEffect(() => {
		if (query) {
			const fetchMovies = async (query) => {
				try {
					const fetchedMovies = await getMoviesList(query);
					setMovies(fetchedMovies.results);
				} catch (error) {
					console.log(error);
				} finally {
				}
			};
			fetchMovies(query);
		}
	}, [query]);

	const searchMovies = (newQuery) => {
		if (query != newQuery) {
			setSearchParams({ query: newQuery });
		}
	};

	return (
		<>
			<SearchForm searchMovies={searchMovies} />
			{movies && <MovieList moviesList={movies} />}
		</>
	);
};

export default MoviesPage;

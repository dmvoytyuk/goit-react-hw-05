import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../utils/api";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const [isError, setIsErrot] = useState(false);
	const { movieId } = useParams();

	useEffect(() => {
		const fetchMovieDetails = async (movieId) => {
			try {
				const fetchedMovie = await getMovieDetails(movieId);
				setMovie((currMovie) => fetchedMovie);
			} catch (error) {
				console.log(error);
				setIsErrot(true);
			} finally {
			}
		};
		fetchMovieDetails(movieId);
	}, [movieId]);

	return (
		<div>
			{movie && <MovieDetails movie={movie} />}
			{movie && <Cast />}
			{movie && <Reviews />}
			{isError && <p>Oops, something went wrong</p>}
			<p>go back</p>
		</div>
	);
};

export default MovieDetailsPage;

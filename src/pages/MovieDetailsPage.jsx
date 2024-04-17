import { useEffect, useState } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { getMovieDetails } from "../utils/api";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import Loader from "../components/Loader/Loader";

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const [isError, setIsErrot] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { movieId } = useParams();

	useEffect(() => {
		const fetchMovieDetails = async (movieId) => {
			try {
				setIsLoading(true);
				const fetchedMovie = await getMovieDetails(movieId);
				setMovie((currMovie) => fetchedMovie);
			} catch (error) {
				console.log(error);
				setIsErrot(true);
			} finally {
				setIsLoading(false);
			}
		};
		fetchMovieDetails(movieId);
	}, [movieId]);

	return (
		<>
			{movie && (
				<div>
					<MovieDetails movie={movie} />
					<p>Additional information</p>
					<ul>
						<li>
							<Link to="cast">Cast</Link>
						</li>
						<li>
							<Link to="reviews">Reviews</Link>
						</li>
					</ul>
					<Routes>
						<Route path="cast" element={<Cast movieId={movieId} />} />
						<Route path="reviews" element={<Reviews movieId={movieId} />} />
					</Routes>
				</div>
			)}
			{isLoading && <Loader />}
			{isError && <p>Oops, something went wrong</p>}
		</>
	);
};

export default MovieDetailsPage;

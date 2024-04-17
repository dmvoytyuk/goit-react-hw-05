import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const MovieDetails = ({ movie }) => {
	const location = useLocation();
	const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const genres = movie.genres.map((genre, index) => {
		if (index < movie.genres.length - 1) {
			return genre.name + ", ";
		} else {
			return genre.name;
		}
	});

	const backLink = useRef(location.state ?? "/movies");

	return (
		<>
			<Link to={backLink.current}>go back</Link>
			<div>
				<img src={imgUrl} width="250px" height="375px" />
				<h2>
					{movie.title}
					{` (${movie.release_date.slice(0, 4)})`}
				</h2>
				<p>User score: {Math.floor(movie.vote_average * 10)}%</p>
				<h3>Overview</h3>
				<p>{movie.overview}</p>
				<h3>Genres</h3>
				<p>{...genres}</p>
			</div>
		</>
	);
};

export default MovieDetails;

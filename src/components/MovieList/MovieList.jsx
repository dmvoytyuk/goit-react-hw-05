import { Link, useLocation } from "react-router-dom";

const MovieList = ({ moviesList }) => {
	const location = useLocation();
	return moviesList.length > 0 ? (
		<ul>
			{moviesList.map((movie) => {
				return (
					<li key={movie.id}>
						<Link state={location} to={`/movies/${movie.id}`}>
							{movie.title}
						</Link>
					</li>
				);
			})}
		</ul>
	) : (
		<p>No movies found</p>
	);
};

export default MovieList;

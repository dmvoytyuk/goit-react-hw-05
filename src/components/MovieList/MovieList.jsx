const MovieList = ({ moviesList }) => {
	return (
		<ul>
			{moviesList.map((movie) => {
				return <li key={movie.id}>{movie.title}</li>;
			})}
		</ul>
	);
};

export default MovieList;

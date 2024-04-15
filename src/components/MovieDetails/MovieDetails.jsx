const MovieDetails = ({ movie }) => {
	const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const genres = movie.genres.map((genre, index) => {
		if (index < movie.genres.length - 1) {
			return genre.name + ", ";
		} else {
			return genre.name;
		}
	});

	return (
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
	);
};

export default MovieDetails;

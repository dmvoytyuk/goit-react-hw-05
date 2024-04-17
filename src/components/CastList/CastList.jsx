const CastList = ({ cast }) => {
	return (
		<ul>
			{cast.map((actor) => {
				return (
					<li key={actor.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
							width="200"
							height="300"
							alt={actor.name}
						/>
						<p>{actor.name}</p>
						<p>{actor.character}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default CastList;

const MoviesPage = () => {
	const onSearch = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};

	return (
		<form onSubmit={onSearch}>
			<label>
				<input name="query" type="text" />
			</label>
			<button type="submit">Search</button>
		</form>
	);
};

export default MoviesPage;

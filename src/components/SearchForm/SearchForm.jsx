const SearchForm = ({ searchMovies }) => {
	const onSearch = (e) => {
		e.preventDefault();
		searchMovies(e.target.query.value);
	};

	return (
		<div>
			<form onSubmit={onSearch}>
				<label>
					<input name="query" type="text" />
				</label>
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default SearchForm;

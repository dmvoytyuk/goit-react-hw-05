const ReviewsList = ({ reviews }) => {
	return reviews.length > 0 ? (
		<ul>
			{reviews.map((review) => {
				return (
					<li key={review.id}>
						<h4>{review.author}</h4>
						<p>{review.content}</p>
					</li>
				);
			})}
		</ul>
	) : (
		<p>No reviews found</p>
	);
};

export default ReviewsList;

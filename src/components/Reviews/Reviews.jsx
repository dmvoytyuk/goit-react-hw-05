import { useEffect, useState } from "react";
import { getMovieReviews } from "../../utils/api";
import ReviewsList from "../ReviewsList/ReviewsList";

const Reviews = ({ movieId }) => {
	const [reviews, setReviews] = useState(null);
	useEffect(() => {
		const fetchMovieReviews = async (movieId) => {
			try {
				const fetchedReviews = await getMovieReviews(movieId);
				setReviews(fetchedReviews);
			} catch (error) {
			} finally {
			}
		};

		fetchMovieReviews(movieId);
	}, [movieId]);

	return <>{reviews && <ReviewsList reviews={reviews.results} />}</>;
};

export default Reviews;

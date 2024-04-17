import { useEffect, useState } from "react";
import { getMovieReviews } from "../../utils/api";
import ReviewsList from "../ReviewsList/ReviewsList";
import Loader from "../Loader/Loader";

const Reviews = ({ movieId }) => {
	const [reviews, setReviews] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchMovieReviews = async (movieId) => {
			try {
				setIsLoading(true);
				const fetchedReviews = await getMovieReviews(movieId);
				setReviews(fetchedReviews);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMovieReviews(movieId);
	}, [movieId]);

	return (
		<>
			{reviews && <ReviewsList reviews={reviews.results} />}
			{isLoading && <Loader />}
		</>
	);
};

export default Reviews;

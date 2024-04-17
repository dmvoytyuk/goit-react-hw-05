import { useEffect, useState } from "react";
import { getMovieCast } from "../../utils/api";
import CastList from "../CastList/CastList";
import Loader from "../Loader/Loader";

const Cast = ({ movieId }) => {
	const [cast, setCast] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchMovieCast = async (movieId) => {
			try {
				setIsLoading(true);
				const fetchedCast = await getMovieCast(movieId);
				setCast(fetchedCast);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMovieCast(movieId);
	}, [movieId]);

	return (
		<>
			{cast && <CastList cast={cast.cast} />}
			{isLoading && <Loader />}
		</>
	);
};

export default Cast;

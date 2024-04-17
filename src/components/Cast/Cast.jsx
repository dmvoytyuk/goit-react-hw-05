import { useEffect, useState } from "react";
import { getMovieCast } from "../../utils/api";
import CastList from "../CastList/CastList";

const Cast = ({ movieId }) => {
	const [cast, setCast] = useState(null);

	useEffect(() => {
		const fetchMovieCast = async (movieId) => {
			try {
				const fetchedCast = await getMovieCast(movieId);
				setCast(fetchedCast);
			} catch (error) {
				console.log(error);
			} finally {
			}
		};

		fetchMovieCast(movieId);
	}, [movieId]);

	return <>{cast && <CastList cast={cast.cast} />}</>;
};

export default Cast;

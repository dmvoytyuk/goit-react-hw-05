import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

function App() {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:movieId" element={<MovieDetailsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;

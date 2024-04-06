import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<header>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/movies">Movies</NavLink>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;

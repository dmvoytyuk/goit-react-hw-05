import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const isLinkActive = ({ isActive }) =>
	clsx(styles.link, { [styles.activeLink]: isActive });

const Navigation = () => {
	return (
		<nav className={styles.navBar}>
			<NavLink className={isLinkActive} to="/">
				Home
			</NavLink>
			<NavLink className={isLinkActive} to="/movies">
				Movies
			</NavLink>
		</nav>
	);
};

export default Navigation;

import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div>
			Page Not Found!
			<Link to="/">go to home page</Link>
		</div>
	);
};

export default NotFoundPage;

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState(null);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		setToken(storedToken);

		axios
			.get("http://localhost:6603/movies", {
				headers: storedToken ? { Authorization: `Bearer ${storedToken}` } : {},
			})
			.then((result) => {
				setMovies(result.data.data.movies);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	const handleLogin = (loginRequest) => {
		axios
			.post("http://localhost:6603/auth/login", loginRequest)
			.then((result) => {
				const receivedToken = result.data.token;
				setToken(receivedToken);
				localStorage.setItem("token", receivedToken);
				console.log("User logged in successfully");
			})
			.catch((error) => {
				console.error("Failed to log in:", error);
			});
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		setToken(null);
	};

	const handleDelete = (id) => {
		if (!token) {
			console.error("No token provided.");
			return;
		}

		axios
			.delete(`http://localhost:6603/movies/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(() => {
				const updatedMovies = movies.filter((movie) => movie._id !== id);
				setMovies(updatedMovies);
			})
			.catch((error) => {
				console.error("Error deleting movie:", error);
			});
	};

	const handleAdd = (newMovie) => {
		if (!token) {
			console.error("No token provided.");
			return;
		}

		axios
			.post("http://localhost:6603/movies", newMovie, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(() => {
				console.log("Movie added successfully. Fetching updated list...");
				return axios.get("http://localhost:6603/movies", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
			})
			.then((res) => {
				setMovies(res.data.data.movies);
			})
			.catch((error) => {
				console.error("Error adding movie or fetching updated list:", error);
			});
	};

	return (
		<MoviesContext.Provider
			value={{
				movies,
				loading,
				token,
				handleLogin,
				handleLogout,
				handleDelete,
				handleAdd,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
};

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
			.get("http://localhost:6603/movies")
			.then((result) => {
				const rawMovies = result.data?.data?.movies;
				const cleanedMovies = Array.isArray(rawMovies)
					? rawMovies.filter((m) => m && m._id)
					: [];
				setMovies(cleanedMovies);
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
				setToken(result.data.token);
				localStorage.setItem("token", result.data.token);
				console.log("User logged in successfully");
				window.location.reload(); // تا context دوباره token رو بگیره
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
				const updatedMovies = movies.filter(
					(movie) => movie && movie._id !== id
				);
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
			.then((res) => {
				const addedId = res.data?.data?._id;
				if (addedId) {
					axios
						.get(`http://localhost:6603/movies/${addedId}`)
						.then((result) => {
							const fullMovie = result.data?.data;
							if (fullMovie && fullMovie._id) {
								setMovies([...movies, fullMovie]);
								console.log("Movie added:", fullMovie);
							}
						})
						.catch((err) => {
							console.error("Error fetching new movie:", err);
						});
				}
			})
			.catch((error) => {
				console.error("Error adding movie:", error);
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

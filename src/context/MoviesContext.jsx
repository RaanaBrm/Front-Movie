import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState(null);

	useEffect(() => {
		let token = localStorage.getItem("token");
		setToken(token);

		axios
			.get("http://localhost:6603/movies")
			.then((result) => {
				console.log(result.data.data.movies);
				setMovies(result.data.data.movies);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	const handleEdit = (updatedMovie) => {
		axios
			.put(`http://localhost:6603/movies/${updatedMovie.id}`, updatedMovie)
			.then((result) => {
				const updatedMovies = movies.map((movie) =>
					movie.id === updatedMovie.id ? result.data.data.movie : movie
				);
				setMovies(updatedMovies);
			})
			.catch((error) => {
				console.error("Error updating movie:", error);
			});
	};

	const handleDelete = (id) => {
		let token = localStorage.getItem("token");
		if (!token) {
			console.error("No token provided for adding movie.");
			return;
		}
		setToken(token);

		axios
			.delete(`http://localhost:6603/movies/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			})
			.then(() => {
				const updatedMovies = movies.filter((movie) => movie._id !== id);
				console.log(updatedMovies);
				setMovies(updatedMovies);
			})
			.catch((error) => {
				console.error("Error deleting movie:", error);
			});
	};

	const handleAdd = (newMovie) => {
		let token = localStorage.getItem("token");
		if (!token) {
			console.error("No token provided for adding movie.");
			return;
		}
		setToken(token);

		axios
			.post("http://localhost:6603/movies", newMovie, {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			})
			.then((result) => {
				setMovies((movies) => [...movies, result.data.data.movie]);
				console.log("movie added");
			})
			.catch((error) => {
				console.error("Error adding movie:", error);
			});
	};

	const handleLogin = (loginRequest) => {
		axios
			.post("http://localhost:6603/auth/login", loginRequest)
			.then((result) => {
				setToken(() => result.data.token);
				localStorage.setItem("token", result.data.token);
				console.log("User logged in successfully");
			})
			.catch((error) => {
				console.error("Failed to loggIn :", error);
			});
	};
	const handlLogout = () => {
		localStorage.removeItem('token');
		setToken('');
	}
	return (
		<MoviesContext.Provider
			value={{ movies, loading, handleDelete, handleEdit, handleAdd, handleLogin, token, handlLogout }}
		>
			{children}
		</MoviesContext.Provider>
	);
};

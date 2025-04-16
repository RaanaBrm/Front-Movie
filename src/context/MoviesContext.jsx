import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Creating a context for Movies data
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState(null);

	useEffect(() => {
		// Retrieve the token from localStorage when the component mounts
		const storedToken = localStorage.getItem("token");
		setToken(storedToken);

		// Fetch movie data from the API
		axios
			.get("http://localhost:6603/movies")
			.then((result) => {
				setMovies(result.data.data.movies);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	// Logout user and remove token
	const handlLogout = () => {
		localStorage.removeItem("token"); // Remove token from localStorage
		setToken(null); // Reset token state
	};

	// Handle user login by sending credentials and storing the received token
	const handleLogin = (loginRequest) => {
		axios
			.post("http://localhost:6603/auth/login", loginRequest)
			.then((result) => {
				setToken(result.data.token); // Store the token in state
				localStorage.setItem("token", result.data.token); // Save token in localStorage
				console.log("User logged in successfully");
			})
			.catch((error) => {
				console.error("Failed to log in:", error);
			});
	};

	return (
		<MoviesContext.Provider value={{ movies, loading, token, handleLogin, handlLogout }}>
			{children}
		</MoviesContext.Provider>
	);
};

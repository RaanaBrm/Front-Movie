import { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet";
import style from "./add.module.css";
import { MoviesContext } from "../../context/MoviesContext";
import LoginForm from "../../components/login/loginForm";

function Add() {
	const getDate = () => {
		const date = new Date();
		const day = String(date.getDate()).padStart(2, "0");
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const year = date.getFullYear();
		return `${year}-${month}-${day}`;
	};

	const { token, handleAdd } = useContext(MoviesContext);

	const [movieData, setMovieData] = useState({
		original_title: "",
		overview: "",
		release_date: getDate(),
		vote_average: "",
	});

	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMovieData({ ...movieData, [name]: value });
	};

	const submitMovie = async (event) => {
		event.preventDefault();

		if (
			!movieData.original_title ||
			!movieData.overview ||
			!movieData.release_date ||
			!movieData.vote_average
		) {
			setMessage("Please fill in all the required fields.");
			return;
		}

		try {
			await handleAdd(movieData);
			setMessage("✅ Movie added successfully!");
			setMovieData({
				original_title: "",
				overview: "",
				release_date: getDate(),
				vote_average: "",
			});
		} catch (error) {
			console.error("Error adding movie:", error);
			setMessage("❌ Failed to add movie. Please try again.");
		}
	};

	return (
		<div className={cn("relative z-20")}>
			<Helmet>
				<title>Add Movie | Movie App</title>
				<meta name="description" content="Add a new movie to your collection." />
			</Helmet>

			<div className={style.add}>
				<div className={style.container}>
					<div className={style.wrapper}>
						{token ? (
							<>
								<h2>Add New Movie</h2>
								<form onSubmit={submitMovie}>
									<h3>Title :</h3>
									<input
										type="text"
										name="original_title"
										value={movieData.original_title}
										onChange={handleChange}
										className={style.textInput}
										required
									/>

									<h3>Release Date:</h3>
									<input
										type="date"
										name="release_date"
										value={movieData.release_date}
										onChange={handleChange}
										required
									/>

									<h3>Rating :</h3>
									<input
										type="number"
										min={1}
										max={10}
										name="vote_average"
										value={movieData.vote_average}
										onChange={handleChange}
										required
									/>

									<h3>Description :</h3>
									<textarea
										name="overview"
										value={movieData.overview}
										onChange={handleChange}
										className={style.textInput}
										required
									/>

									<div className={style.submitContainer}>
										<button
											className={`${style.submitButton} focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2`}
											type="submit"
											aria-label="Add"
											tabIndex={0}
										>
											Submit
										</button>
									</div>

									{message && (
										<p
											aria-live="polite"
											style={{
												marginTop: "1rem",
												color: message.includes("✅") ? "green" : "crimson",
											}}
										>
											{message}
										</p>
									)}
								</form>
							</>
						) : (
							<LoginForm />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Add;

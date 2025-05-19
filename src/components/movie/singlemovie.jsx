import React, { useState } from "react";
import { Link } from "react-router-dom";


import style from "./singlemovie.module.css"

function Singlemovie({ article, handleDelete }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const confirmDelete = (movieId) => {
        setShowConfirm(false);
        handleDelete(movieId);

    };

    return (
        <div className="flex justify-center items-center p-4 w-full">
            <div className="relative bg-[#141414] rounded-md overflow-hidden w-full shadow-lg transform transition duration-300 hover:scale-105 hover:z-10 group">

                {/* Movie Poster + Overlay + Title */}
                <Link to={`/movie/${article._id}`} className="block">
                    <img
                        src={article.poster_path}
                        alt="No poster available"
                        className="w-full h-64 sm:h-72 object-cover"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Movie title (revealed on hover) */}
                    <div className="absolute bottom-0 left-0 w-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm sm:text-base font-semibold truncate">
                            {article.original_title}
                        </p>
                    </div>
                </Link>

                {/* Delete Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowConfirm(true);
                    }}
                    className="absolute top-2 right-2 z-20 px-3 py-1 text-xs sm:text-sm flex items-center gap-1 
         bg-gradient-to-r from-red-600 via-pink-600 to-red-700 
         hover:from-red-700 hover:to-pink-700 
         text-white font-medium rounded-md shadow-md 
         transition-all duration-300 backdrop-blur-sm cursor-pointer
         focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    aria-label="Delete movie"
                />


                {/* Confirmation Modal */}
                {showConfirm && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
                        <div className="bg-[#1e1e1e] text-white p-6 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
                            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                            <p className="mb-6 text-sm text-gray-300">
                                Are you sure you want to delete <strong>{article.original_title}</strong>? This action cannot be undone.
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setShowConfirm(false)}
                                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-sm rounded-md transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => confirmDelete(article._id)}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-sm rounded-md transition"
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Singlemovie;

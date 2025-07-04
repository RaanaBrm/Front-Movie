import React, { Suspense, useContext } from "react";
const Singlemovie = React.lazy(() =>
    import("../../components/movie/singlemovie")
);
import { MoviesContext } from '../../context/MoviesContext';

function Movies() {
    const { movies, loading, handleDelete } = useContext(MoviesContext);

    return (
        <main>
            <section className="px-4 py-8 m-auto max-w-screen-xl mx-auto">
                {loading ? (
                    <div className="text-white text-center text-lg">Loading...</div>
                ) : (
                    <Suspense
                        fallback={
                            <div className="text-white text-center">Loading movies...</div>
                        }
                    >
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-6 px-4 max-w-screen-xl mx-auto p-5">
                            {movies.map((movie, index) =>
                                movie?._id ? (
                                    <Singlemovie
                                        article={movie}
                                        handleDelete={handleDelete}
                                        key={movie._id}
                                    />
                                ) : null
                            )}
                        </div>
                    </Suspense>
                )}
            </section>
        </main>
    );
}

export default Movies;

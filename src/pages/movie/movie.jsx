import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Wrapper from '../../components/container/container';
import style from './movie.module.css';
import { MoviesContext } from '../../context/MoviesContext';

function Movie() {
    const { id } = useParams();
    const { movies, handleEdit } = useContext(MoviesContext);
    const [article, setArticle] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedArticle, setEditedArticle] = useState(null);

    useEffect(() => {
        const foundArticle = movies.find((movie) => movie.id === parseInt(id));
        if (foundArticle) {
            setArticle(foundArticle);
            setEditedArticle(foundArticle);
        } else {
            console.error("cant find movie");
        }
    }, [id, movies]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedArticle((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveChanges = () => {
        handleEdit(editedArticle);
        setArticle(editedArticle);
        setIsEditing(false);
    };

    const getShortDescription = (text) => {
        const sentences = text.split('.');
        return sentences.slice(0, 2).join('.') + (sentences.length > 2 ? '...' : '');
    };

    return (
        <Wrapper>
            <div>
                <div className="container">
                    <article className={style.article}>

                        {article ? (
                            <section className={style.movieContainer}>

                                <div className={style.posterContainer}>
                                    <img 
                                        src={article.poster_path} 
                                        alt={`Poster of ${article.original_title}`} 
                                        title={`Poster of ${article.original_title}`} 
                                    />
                                </div>

                                <section className={style.detailsContainer}>
                                    {!isEditing ? (
                                        <>
                                            <div className={style.description}>
                                                <h1>{article.original_title}</h1>
                                                <p>Release Date: {article.release_date}</p>
                                                <p>Rate: {article.vote_average}</p>
                                                <p>Overview: {getShortDescription(article.overview)}</p>
                                                <button onClick={() => setIsEditing(true)} className={style.button}>Edit</button>
                                            </div>

                                            {article.casts && article.casts.length > 0 ? (
                                                <section className={style.casts}>
                                                    {article.casts.slice(0, 5).map((cast) => (
                                                        <div key={cast.id} className={style.cast}>
                                                            <img 
                                                                src={cast.profile_path} 
                                                                alt={`Cast: ${cast.name}`} 
                                                                title={`Cast: ${cast.name}`} 
                                                            />
                                                        </div>
                                                    ))}
                                                </section>
                                            ) : (
                                                <p>There is no photo for cast</p>
                                            )}
                                        </>
                                    ) : (
                                        <div className={style.description}>
                                            <label htmlFor="original_title">Title:</label>
                                            <input
                                                type="text"
                                                name="original_title"
                                                value={editedArticle.original_title}
                                                onChange={handleInputChange}
                                                className={style.input}
                                                id="original_title"
                                            />
                                            <label htmlFor="overview">Description:</label>
                                            <textarea
                                                name="overview"
                                                value={editedArticle.overview}
                                                onChange={handleInputChange}
                                                className={style.textarea}
                                                id="overview"
                                            ></textarea>
                                            <button onClick={saveChanges} className={style.button}>Save</button>
                                            <button onClick={() => setIsEditing(false)} className={style.button}>Cancel</button>
                                        </div>
                                    )}
                                </section>
                            </section>
                        ) : (
                            <div className={style.placeholder}>Loading...</div>
                        )}

                    </article>
                </div>
            </div>
        </Wrapper>
    );
}

export default Movie;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p className={styles.movie__summary}>{summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((g, idx) => (
                    <li key={idx}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTyps = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

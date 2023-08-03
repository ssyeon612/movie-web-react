import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h2>
                {movie.title} ({movie.year})
            </h2>
            <p>rate: {movie.rating}</p>
            <img src={movie.large_cover_image} />
            <p>{movie.description_full}</p>
        </div>
    );
}

export default Detail;

import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({})
    let {id} = useParams();

    useEffect(() => {
        let myMovie = {
            id: 2,
            title: "Diuna",
            release_date: "2021-05-25",
            runtime: 167,
            mpaa_rating: "R",
            description: "Very good film in my opinion"
        }

        setMovie(myMovie)
    }, [id]);

    return (
        <div className="text-center">
            <h2>Movie {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, rated "{movie.mpaa_rating}"</em></small>
            <hr />
            <p>{movie.default}</p>
        </div>
    )
}

export default Movie;
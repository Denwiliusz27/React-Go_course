import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Szczęki",
                release_date: "1987-03-05",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description"
            },
            {
                id: 2,
                title: "Diuna",
                release_date: "2021-05-25",
                runtime: 167,
                mpaa_rating: "R",
                description: "Very good film in my opinion"
            },
            {
                id: 3,
                title: "Oppenheimer",
                release_date: "2023-01-14",
                runtime: 135,
                mpaa_rating: "R",
                description: "A lot of bombs"
            }
        ]

        setMovies(moviesList)
    }, []);


    return (
        <div className="text-center">
            <h2>Movies</h2>
            <hr/>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Movie</th>
                    <th>Release data</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {movies.map((m) => (
                    <tr key={m.id}>
                        <td>
                            <Link to={`/movies/${m.id}`}>
                                {m.title}
                            </Link>
                        </td>
                        <td>{m.release_date}</td>
                        <td>{m.mpaa_rating}</td>
                    </tr>
                ))}
                </tbody>
            </table>


        </div>
    )
}

export default Movies;
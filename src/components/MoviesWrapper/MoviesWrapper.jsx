import style from "./moviesWrapper.module.css"
import { data } from "../../data/movies"
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
function MoviesWrapper(props) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setMovies(data);
        setLoading(false);
    }, [])

    function sortBy(by) {
        switch (by) {
            case "views":
                return ((a, b) => (b.views) - (a.views));
            case "date":
                return ((a, b) => new Date(b.date) - new Date(a.date));
        }
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <p className={style.categoryName}>{props.category}</p>
                {
                    loading ? (<Loading />) : (
                        <div className={style.movies}>
                            {
                                movies.sort(sortBy(props.sort)).slice(0, props.limit).map((movie, idx) => (
                                    <Link to={`/movie/${movie.id}`} key={idx}>
                                        <Movie data={movie} />
                                    </Link>
                                ))
                            }
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default MoviesWrapper;
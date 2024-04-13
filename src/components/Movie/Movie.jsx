import { Link } from "react-router-dom";
import style from "./movie.module.css"
function Movie(props){
    return(
        <Link to={`/movie/${props.data.id}`}>
            <div className={style.container}>
                <img className={style.moviePoster} src={props.data.url} alt="logo" />
                <div className={style.movieInfo}>
                    <p className={style.movieName}>{props.data.name}</p>
                    <p className={style.movieYear}>{props.data.year}</p>
                </div>
            </div>
        </Link>
    );
}

export default Movie;
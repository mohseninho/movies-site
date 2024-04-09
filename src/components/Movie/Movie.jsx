import style from "./movie.module.css"
function Movie(props){
    return(
        <div className={style.container}>
            <img className={style.moviePoster} src={props.data.url} alt="logo" />
            <div className={style.movieInfo}>
                <p className={style.movieName}>{props.data.name}</p>
                <p className={style.movieYear}>{props.data.year}</p>
            </div>
        </div>
    );
}

export default Movie;
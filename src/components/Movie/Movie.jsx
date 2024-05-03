import style from "./movie.module.css"
function Movie(props) {
    return (
        <div className={style.container}>
            <div className={style.posterWrapper}>
                <img className={style.poster} src={props.data.url} alt="logo" />
                <div className={style.genreWrapper}>
                    {
                        props.data.genre.map((_genre, _idx) => (
                            <div className={style.genre} key={_idx}>{_genre}</div>
                        ))
                    }
                </div>
            </div>
            <br />
            <div className={style.movieInfo}>
                <p className={style.info}>{props.data.name}<br />{props.data.year}</p>
            </div>
        </div>
    );
}

export default Movie;
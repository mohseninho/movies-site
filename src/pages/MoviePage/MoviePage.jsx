import style from "./moviePage.module.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from 'react-router-dom'
import {data} from "../../data/movies"
function MoviePage(){
    const params = useParams();
    const movie = data[params.id];
    return(
        <>
            <Header />
            <div className={style.infoContainer}>
                <div className={style.effect}></div>
                <img className={style.cover} src={movie.coverUrl} alt="cover" />
                <div className={style.wrapper}>
                    <div className={style.info}>
                        <img className={style.poster} src={movie.url} alt="" />
                        <div className={style.meta}>
                            <p className={style.title}>{movie.name}</p>
                            <p className={style.year}>{`year : ${movie.year}`}</p>
                            <p className={style.desc}>${movie.desc}</p>
                        </div>
                    </div>
                    <div className={style.actions}>
                        <button className={style.trailerBtn}>Trailer</button>
                        <button className={style.onlinePlayBtn}>Online Play</button>
                    </div>
                </div>
            </div>
            <div className={style.linksWrapper}>
                <div className={style.links}>
                    <p>link</p>
                    <p>link</p>
                    <p>link</p>
                    <p>link</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MoviePage;
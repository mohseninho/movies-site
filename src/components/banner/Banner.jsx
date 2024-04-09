// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import {data} from "../../data/banners"

import { faImdb } from '@fortawesome/free-brands-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import style from "./banner.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Banner() {

    const [movies , setMovies] = useState([{}]);
    const [cover , setCover] = useState("https://hillsdalecollegian.com/wp-content/uploads/2024/04/kfp4.jpg");
    const [index , setIndex] = useState(0);

    useEffect(()=>{
        setMovies(data);
    },[])

    const setMovie = (idx)=>{
        setIndex(idx);
        setCover(movies[idx].coverUrl);
    }
       
    return (
        <div className={style.container}>
            <img className={style.banner} src={cover} alt="cover" />
            <div className={style.effect}></div>
            <div className={style.movieInfo}>
                <p className={style.movieName}>{movies[index].name}</p>
                <div className={style.imdb}>
                    <FontAwesomeIcon className={style.imdbIcon} icon={faImdb}></FontAwesomeIcon>
                    <p className={style.imdbScore}>{movies[index].imdb}</p>
                </div>
            </div>
            <Swiper
                modules={[Navigation, A11y ,Autoplay]}
                spaceBetween={20}
                slidesPerView= 'auto'
                slidesPerGroup={1}
                loop = {true}
                autoplay = { {delay : 2000}}
                // navigation
                onSlideChange={(swiper) => setMovie(swiper.realIndex)}
                className={style.swiper}
            >
                {
                    movies.map((movie , idx)=>(
                        <SwiperSlide  className={style.slideWrapper}  key={idx}><img className={index === idx ? style.currentSlide : style.slide}  src={movie.url} alt="movie" /></SwiperSlide>
                    ))
                }
            </Swiper>

           

        </div>
    );
}

export default Banner;

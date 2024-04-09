import style from "./hotMoviesWrapper.module.css"
import {data} from "../../data/movies"
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
function HotMoviesWrapper(props){

    const [movies , setMovies] = useState([]);

    useEffect(()=>{
        setMovies(data);
    },[])

    function sortBy(by){
        switch(by){
            case "views":
                return((a,b)=>(b.views) - (a.views));
        }
    }

    return(
        <div className={style.container}>
            <div className={style.wrapper}>
                <p className={style.categoryName}>Hot Movies</p>
                <div className={style.movies}>
                    {
                        movies.sort(sortBy(props.sort)).slice(0,props.limit).map((movie , idx)=>(
                            <Movie key={idx} data={movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HotMoviesWrapper;
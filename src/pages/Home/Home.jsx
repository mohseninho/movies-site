import Header from "../../components/Header/Header";
import Banner from "../../components/banner/Banner";
import HotMoviesWrapper from "../../components/hotMoviesWrapper/HotMoviesWrapper";

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <HotMoviesWrapper sort="views" limit="6"/>
        </>
    );
}

export default Home;
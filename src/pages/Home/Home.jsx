import Header from "../../components/Header/Header";
import Banner from "../../components/banner/Banner";
import HotMoviesWrapper from "../../components/MoviesWrapper/MoviesWrapper";
import Footer from "../../components/Footer/Footer";

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <HotMoviesWrapper category = "hot movies" sort="views" limit="6"/>
            <HotMoviesWrapper category = "new" sort="date" limit="6"/>
            <Footer />
        </>
    );
}

export default Home;
import Header from "../../components/Header/Header";
import Banner from "../../components/banner/Banner";
import MoviesWrapper from "../../components/MoviesWrapper/MoviesWrapper";
import Footer from "../../components/Footer/Footer";

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <MoviesWrapper category = "hot movies" sort="views"/>
            <MoviesWrapper category = "new" sort="date"/>
            <Footer />
        </>
    );
}

export default Home;
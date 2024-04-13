import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movie/:id" element={<MoviePage />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </div>
    );
}

export default App;

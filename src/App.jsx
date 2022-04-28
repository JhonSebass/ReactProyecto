import { MoviesGrid } from "./components/MovieGrid.jsx";
import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export function App(){
   return (
   <Router>
       <header>
         <Link to="/"><h1 className={styles.title}>Peliculas</h1>  </Link>  
       </header>
       <main>  
       <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes> 
       </main>
   </Router>);
}
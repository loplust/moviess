import styles from './App.module.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import { Watchlist } from './components/Watchlist';
import { GlobalProvider } from './context/GlobalState';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
         <Link to='/watchlist'>
         <h4 className={styles.title}>Favorites</h4>
         </Link>
      </header>
      <main>
       <Routes> 
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/"/>} />
          <Route path='/watchlist' element={<Watchlist/>}/>
       </Routes> 
      </main>
    </Router>
    </GlobalProvider>
  );
}

export default App;

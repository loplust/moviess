import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieFavorites } from './MovieFavorites';
import  styles from './Watchlist.module.css'

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext)

  return (
    <div className='movie-page'>
     <div className='container'>
      <div className='header'>
        <h1 className={styles.title}>My Watchlist</h1>

        <span className={styles.count}>
          {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
        </span>
      </div>

      {watchlist.length > 0 ? (
            <div className={styles.moviesGrid}>
        {watchlist.map((movie) => (
          <MovieFavorites movie={movie} type='watchlist'/>
        ))}
      </div>
      ) : (
        <h2 className='no-movies'>No movies in your list, add some!</h2>
      )}
  
     </div>
    </div>
  )
}

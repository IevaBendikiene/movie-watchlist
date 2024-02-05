import React, {useContext} from 'react'
import { GlobalContext } from '../cotext/GlobalState'
import MovieCard from './MovieCard'

const Watchedlist = ({movie, type}) => {
    const {watched} = useContext(GlobalContext)
  return (
    <div className='movie-page'>
    <div className="container">
      <div className="header">
          <h1 className='heading'>Watched movies</h1>
      </div>
      {watched.length > 0 ? (<div className="movie-grid">
          {watched.map(movie => (
              <MovieCard movie={movie} type='watched'/>
          ))}
      </div>) : (
          <h2 className='no-movies'>No movies in watched list.</h2>
      )}
      
    </div>
  </div>
  )
}

export default Watchedlist

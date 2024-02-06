import React, { useContext } from 'react'
import { Eye, X , EyeSlash} from 'react-bootstrap-icons'
import { GlobalContext } from '../cotext/GlobalState'

const MovieControls = ({movie, type}) => {
 const {removeMovieFromWatchlist,
        addMovieToWatched, 
        moveToWatchlist, 
        removeFromWatched
      } = useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
            <button className='ctrl-btn'
                    onClick={() => addMovieToWatched(movie)}>
                <Eye />
            </button>
            <button className='ctrl-btn'
                    onClick={() => removeMovieFromWatchlist(movie.id)}>
                <X />
            </button>
        </>
      )}
      {type === 'watched' && (
        <>
            <button className="ctrl-btn"
                    onClick={() => moveToWatchlist(movie)}>
            <EyeSlash />
            </button>
            <button className='ctrl-btn'
                        onClick={() => removeFromWatched(movie.id)}>
                    <X />
            </button>
        </>
      )}
    </div>
  )
}

export default MovieControls

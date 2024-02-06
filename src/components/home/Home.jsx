import Movies from '../../components/Movies'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'


function App() {
 let myKey = '53c258bb52d305146e19a71e58aa2cc5'
 
 const [bestMovieS, setBestMovies] = useState([])
 const [myMovies, setMyMovies] = useState([]);
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);

  const [genres, setGenre] = useState([]);
  const [chosenGenre, setChosenGenre] = useState('')
  const [moviesByGenre, setMoviesByGenre] = useState([])

  const inputoRef = useRef()

  const buttonHandler = () =>{
    if(inputoRef.current.value.length <2){
     alert('Reik ivest bent du simbolius')
    } 
    setMovie(inputoRef.current.value)
    setBestMovies([])
    setMoviesByGenre([])
    inputoRef.current.value = ''
  }

  
// Show 10 top rated movies when page is loaded
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${myKey}`)
      .then((response) => {
        setBestMovies(response.data.results);
        setError(null);
      })
      .catch(setError);
  
    }, [myKey]);

// find your movie by input value
useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${myKey}&query=${movie}`)
    .then((response) => {
      setMyMovies(response.data.results);
      setError(null);
    })
    .catch(setError);
  },[myKey, movie])

// finds all genres in movie database
  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${myKey}`)
    .then((response) => {
      setGenre(response.data.genres);
      setError(null);
    })
    .catch(setError);
  },[myKey])

const handleChosenGenre=() =>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${chosenGenre}&language=en-US&api_key=${myKey}`)
    .then((response) => {
      setMoviesByGenre(response.data.results);
      setError(null);
      setBestMovies([])
      setMyMovies([])
    })
    .catch(setError);
  }

if (error) return <p>An error occurred</p>

  return (
    <div className="home container">
      <h1>Find movies for your movie-night!</h1>
      <div className="inner-container">
            <input type="text" id='nameInput' ref={inputoRef} placeholder='search for a movie'/>
                  
              <select
              value={chosenGenre}
              onChange ={(e) => {
                setChosenGenre(e.target.value)
                handleChosenGenre(e.target.value)
              }}>
                <option >Choose movie by genre</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                    ))
              }
              </select> 
              <button onClick={buttonHandler}>Search movie</button>    
      </div>
      <div className='movie-container'>
          {myMovies.map((movie) =>(
              <Movies key={movie.id} movie={movie} />
            ))}
          {moviesByGenre.map((movie) => (
                <Movies key={movie.id} movie={movie} />
              ))}
          {bestMovieS.slice(0,10).map((bestmovie) => (
              <Movies key={bestmovie.id} movie={bestmovie}/>
            ))}
      </div>
    </div>
  );
}

export default App;
import React,{useContext} from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = () => {
    const [movies,setMovies]=useContext(MovieContext)
  return (
    <div className='row'>
    {movies.map(movie=>(
        <Movie name={movie.name} desc={movie.desc} price={movie.price} image={movie.image} key={movie.id} />
    ))}
</div>
  )
}

export default MovieList
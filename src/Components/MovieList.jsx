import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movies}) => {
  return (
    <div className='movie-list' >
        {
movies.map(el=>
    <div>
  <MovieCard movie={el} />
    </div>
    )
        }
    </div>
  )
}

export default MovieList













// import React from 'react'
// import MovieCard from './MovieCard'

// const MovieList = ({movies}) => {
//     console.log(movies)
//   return (
//     <div className='movie-list'>
// {
//     movies.map(el=>
//     <MovieCard film={el}  key={el.id} />
//     )
// }
//     </div>
//   )
// }

// export default MovieList
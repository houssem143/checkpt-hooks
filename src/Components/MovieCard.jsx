import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
  return (
    <div>

    <Link to={`/trailer/${movie.id}`} >
          <div className='movie-card'>
        <StarRating rating={movie.rating} />
        <img src={movie.image} alt="" />
        <h3>{movie.name}</h3>
        <p>{movie.date}</p>
    </div>
        

        </Link>
        
    </div>
  )
}

export default MovieCard














// import React from 'react'
// import StarRating from './StarRating'

// const MovieCard = ({film}) => {
//   return (
//     <div className='movie-card'>
//         <StarRating rating={film.rating} />
//          <img src={film.image} alt="" />
//          <h3> {film.name} </h3>
//          <p>  {film.date} </p>
//     </div>
//   )
// }

// export default MovieCard
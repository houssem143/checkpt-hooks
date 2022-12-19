import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({movies}) => {
    const params = useParams()
    const el = movies.find(movie=>movie.id===Number(params.id))
  return (
    <div>
        <h3 style={{color:"white"}}>
            {el.description}
        </h3>
        <iframe height={500} width={1000} src={el.trailer} frameborder="0"></iframe>
    </div>
  )
}

export default Description
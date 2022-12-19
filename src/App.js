import React, { useState } from 'react'
import MovieList from './Components/MovieList'
import { moviesData } from './Data' 
import './App.css'
import Filter from './Components/Filter'
import AddMovie from './Components/AddMovie'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Description from './Components/Description'

const App = () => {
  const [movies, setMovies] = useState(moviesData)
  const [text, setText] = useState("")
  const [rating, setRating] = useState(1)
  const handleAdd = (newMovie) => setMovies([...movies,newMovie])
  const handleRating = (x) => setRating(x)
const handleChange = (e) => setText(e.target.value)
  
  return (
    <div className='App'>
   <BrowserRouter>
   <Filter text={text} handleRating={handleRating} rating={rating} handleChange={handleChange} />
   <Routes>
<Route path="/" element={<MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())
    && el.rating >= rating)} />} />
   <Route path="/trailer/:id" element={<Description movies={movies} />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App




















// import logo from "./logo.svg";
// import "./App.css";
// import { moviesData } from "./data";
// import MovieList from "./Components/MovieList";
// import { useState } from "react";
// import AddMovie from "./Components/AddMovie";
// import Filter from "./Components/Filter";

// function App() {
//   const [movies, setMovies] = useState(moviesData);
//   const [text, setText] = useState("")
//   const [rating, setRating] = useState(1)

// const handleRating = (x) => setRating(x)
// const handleChange = (e) => setText(e.target.value)
// const handleAdd = (newMovie) => setMovies([...movies,newMovie])

//   return <div className="App">
//     <Filter text={text} handleChange={handleChange} rating={rating} handleRating={handleRating} />
//     <MovieList  movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())
//       && el.rating >= rating
//       )}  />
//     <AddMovie add={handleAdd} />
//   </div>;
// }

// export default App;

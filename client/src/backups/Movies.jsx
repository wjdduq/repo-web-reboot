import { useState } from 'react'

export default function App() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')

  // useEffect(실행할함수, 의존성배열)
  // useEffect(function () {}, []) --> 배열 내용이 바뀔 때마다 함수를 실행함
  // useEffect(function () {
  // fetchMovies()
  // }, [])
  async function fetchMovies() {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const data = await res.json()
    setMovies(data.Search || [])
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={function (event) {
            setSearchText(event.target.value)
          }}
          onKeyDown={function (event) {
            if (event.nativeEvent.isComposing) return
            if (event.key === 'Enter') fetchMovies()
          }}
        />
        <button>Search</button>
      </div>
      <ul>
        {movies.map(function (movie) {
          return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>
    </>
  )
}

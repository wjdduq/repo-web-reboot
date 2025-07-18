import { useMovieStore } from '@/stores/movie.js'

export default function Movies() {
  const movies = useMovieStore(s => s.movies)
  const searchText = useMovieStore(s => s.searchText)
  const setSearchText = useMovieStore(s => s.setSearchText)
  const fetchMovies = useMovieStore(s => s.fetchMovies)
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

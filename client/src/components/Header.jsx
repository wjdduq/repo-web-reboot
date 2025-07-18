import { Link } from 'react-router'
export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/signin">Sign In</Link>
    </header>
  )
}

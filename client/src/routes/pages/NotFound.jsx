import { Link } from 'react-router'
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found : You Accessed Wrong Page Link</h1>
      <Link to={'/'}>Return Home</Link>
    </div>
  )
}

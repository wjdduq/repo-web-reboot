import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from '@/routes/layouts/Default.jsx'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Todos from '@/routes/pages/Todos'
import Movies from '@/routes/pages/Movies'
import SignIn from '@/routes/pages/SignIn'
import NotFound from '@/routes/pages/NotFound'

const router = createBrowserRouter([
  {
    element: <Default></Default>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/todos',
        element: <Todos></Todos>
      },
      {
        path: '/movies',
        element: <Movies></Movies>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
])
export default function Router() {
  return <RouterProvider router={router}></RouterProvider>
}

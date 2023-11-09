import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App'
import './style/sideBar.css'
import './style/home.css'
import './style/pages.css'
import MovieView from './components/movie'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './style/movie.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/details/:movieId",
    element: <MovieView/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

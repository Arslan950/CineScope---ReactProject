import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import Favourites from './Pages/Favourites.jsx'
import NotFound from './Pages/NotFound.jsx'
import Search from './Pages/Search.jsx'
import MoviesDetail from './Pages/Movie/MoviesDetail.jsx'
import MovieDescription from './Pages/Movie/MovieDescription.jsx'
import Home from './Pages/Home.jsx'
import Explore from './Pages/Explore.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path : "home",
        element : <Home />
      },
      {
        path: "favorites",
        element: <Favourites />
      },
      {
        path: "Search",
        element: <Search />
      },
      {
        path: "explore",
        element: <MoviesDetail />,
        children : [
          {
            index : true ,
            element : <Explore />
          },
          {
            path : ":title",
            element : <MovieDescription />
          },
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Dashboard = lazy(() => import('./Pages/Dashboard.jsx'));
const Favourites = lazy(() => import('./Pages/Favourites.jsx'));
const NotFound = lazy(() => import('./Pages/NotFound.jsx'));
const Search = lazy(() => import('./Pages/Search.jsx'));
const MoviesDetail = lazy(() => import('./Pages/Movie/MoviesDetail.jsx'));
const MovieDescription = lazy(() => import('./Pages/Movie/MovieDescription.jsx'));
const Home = lazy(() => import('./Pages/Home.jsx'));
const Explore = lazy(() => import('./Pages/Explore.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={null}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={null}>
            <Favourites />
          </Suspense>
        ),
      },
      {
        path: "Search",
        element: (
          <Suspense fallback={null}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "explore",
        element: (
          <Suspense fallback={null}>
            <MoviesDetail />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={null}>
                <Explore />
              </Suspense>
            ),
          },
          {
            path: ":title",
            element: (
              <Suspense fallback={null}>
                <MovieDescription />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "*",
        element: (
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

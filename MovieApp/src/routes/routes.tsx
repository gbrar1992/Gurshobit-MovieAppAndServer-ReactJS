import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MovieDetails from "../pages/movie-details";
import MoviesInTheater from "../pages/movies-in-theater";
import TopRatedIndian from "../pages/top-rated-indian";
import TopRatedMovies from "../pages/top-rated-movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/top-rated-india",
    element: <TopRatedIndian />,
  },
  {
    path: "/movies/top-rated-movies",
    element: <TopRatedMovies />,
  },
  {
    path: "/movies/movies-in-theaters",
    element: <MoviesInTheater />,
  },
  {
    path: "/movies/:movie",
    element: <MovieDetails />,
  },
]);

export default router;

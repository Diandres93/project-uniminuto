import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import { getMovies } from "../utils/getMovies";
import { setMoviesStore } from "../store/slices/movieSlice";

export const MovieList = () => {
  //const [movies, setMovies] = useState([]);
  const moviesStore = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    const fecthMovies = async () => {
      try {
        const result = await getMovies();
        dispatch(setMoviesStore(result.results));
        //setMovies(moviesStore);
      } catch (error) {
        console.log("error", error);
      }
    };
    fecthMovies();
  }, []);

  return (
    <Container fluid className="mt-3 ">
      <Row>
        {moviesStore ? (
          moviesStore.map((movie) => {
            return (
              <Col sm={12} lg={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            );
          })
        ) : (
          <h1>Cargando</h1>
        )}
      </Row>
    </Container>
  );
};

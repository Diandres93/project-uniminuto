import { useParams } from "react-router-dom";
import { getMovieById } from "../utils/getMovies";
import { useEffect, useState } from "react";

export const MovieDetail = () => {
  const [movie, setMovie] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const movieById = async () => {
      let result = await getMovieById(id);
      console.log(result);
      setMovie(result);
    };
    movieById();
  }, [id]);

  return (
    <div className="container d-flex m-5 p-3">
      <div className="row d-flex w-10 justify-content-center align-items-center">
        {
          // if the data is not loaded yet show a loading spinner
          !movie ? (
            <h1>Cargando</h1>
          ) : (
            <>
              <div className="col h-100 d-flex  justify-content-center m-0 p-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </div>
              <div className="col-sm-4 card">
                <div className="card-body">
                  <h3 className="card-title">{movie.title}</h3>
                </div>
                <p className="card-text">{movie.overview}</p>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

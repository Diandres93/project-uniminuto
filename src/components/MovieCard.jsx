import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MAX_TITLE_LENGTH = 20;
const MAX_TEXT_LENGTH = 100;

export const MovieCard = ({ movie }) => {
  console.log("first2", movie);
  const truncatedTitle =
    movie.title.length > MAX_TITLE_LENGTH
      ? `${movie.title.slice(0, MAX_TITLE_LENGTH)}...`
      : movie.title;

  const truncatedText =
    movie.overview.length > MAX_TEXT_LENGTH
      ? `${movie.overview.slice(0, MAX_TEXT_LENGTH)}...`
      : movie.overview;

  //<CardMedia component="img" height="100%" image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="green iguana" />

  //getIamge();
  return (
    <Card className="rounded m-1" style={{ width: "25rem", height:"50rem"}}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <Card.Body className="bg-dark rounded-bottom">
        <Card.Title className="text-success">{truncatedTitle}</Card.Title>
        <Card.Text className="text-light">{truncatedText}</Card.Text>
    <Link to={`movie/${movie.id}`}>
        <Button variant="success">Ver Más</Button>
    </Link>
      </Card.Body>
    </Card>
  );
};

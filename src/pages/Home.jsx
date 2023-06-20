import Container from "react-bootstrap/esm/Container";
import { MovieList } from "../components/MovieList";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Container fluid className="bg-dark-subtle">
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
};

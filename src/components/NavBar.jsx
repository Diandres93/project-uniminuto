

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Search } from "./Search";


function NavBar() {
  return (
    <Navbar className="p-5" bg="dark rounded" expand="lg">
      <Container fluid>
        <Link to={"/"}>
        <Navbar.Brand className="text-light">Uniminuto</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Search/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

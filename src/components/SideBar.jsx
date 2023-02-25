import { Button, Col, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyInputGroup from "./MyInputGroup";

const SideBar = () => {
  return (
    <>
      <Navbar
        //  bg="light"
        expand="md"
        className=" bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="nav-container flex-column">
          <Link to="/">
            <span className="navbar-brand">
              <img
                src="/assets/logo/Spotify_Logo.png"
                width="131"
                height="40"
                className="d-inline-block align-top"
                alt="SpotifyLogo"
              />
            </span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="collapse navbar-collapse" id="basic-navbar-nav">
            <Nav className="flex-column">
              <Link to="/" className="nav-link">
                <i className="fas fa-home fa-lg"></i>&nbsp; Home
              </Link>
              <Nav.Link href="#link">
                <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
              </Nav.Link>
              <Nav.Link href="#link">
                <MyInputGroup />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sing Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <p>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </p>
        </div>
      </Navbar>
    </>
  );
};
export default SideBar;

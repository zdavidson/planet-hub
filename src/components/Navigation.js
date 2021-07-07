import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.scss";
import data from "../data.json";

const Navigation = ({
  setPlanet,
  setContent,
  setImage,
  setGeoImage,
  setIsOpen,
  isOpen,
}) => {
  return (
    <div className="navigation">
      <NavBar>
        <NavBar.Brand id="brand" href="#home">
          The Planets
        </NavBar.Brand>

        <Nav id="nav-links" className="nav-links">
          {data.map((planet) => {
            return (
              <Nav.Link
                className="navigation-link"
                href="#"
                onClick={() => {
                  setPlanet(planet);
                  setContent(planet.overview.content);
                  setImage(planet.images.planet);
                  setGeoImage(false);
                }}
              >
                {planet.name}
              </Nav.Link>
            );
          })}
        </Nav>
        <span id="hamburger-icon" onClick={() => setIsOpen(!isOpen)}></span>
      </NavBar>
    </div>
  );
};

export default Navigation;

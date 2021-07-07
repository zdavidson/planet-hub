import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.scss";
import data from "../data.json";

const Navigation = (props) => {
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
                  props.setPlanet(planet);
                  props.setContent(planet.overview.content);
                  props.setImage(planet.images.planet);
                  props.setGeoImage(false);
                }}
              >
                {planet.name}
              </Nav.Link>
            );
          })}
        </Nav>
      </NavBar>
    </div>
  );
};

export default Navigation;

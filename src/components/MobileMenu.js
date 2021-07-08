import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import data from "../data.json";
import "./MobileMenu.scss";

const MobileMenu = ({
  setPlanet,
  setContent,
  setImage,
  setGeoImage,
  setIsOpen,
}) => {
  return (
    <div className="mobile-menu">
      <NavBar>
        <Nav id="mobile-nav">
          {data.map((planet) => {
            return (
              <Nav.Link
                className="mobile-nav-link"
                key={planet.id}
                href="#"
                onClick={() => {
                  setPlanet(planet);
                  setContent(planet.overview.content);
                  setImage(planet.images.planet);
                  setGeoImage(false);
                  setIsOpen(false);
                }}
              >
                <div className="planet-color"></div>
                {planet.name}

                <img
                  className="chevron"
                  src="./assets/icon-chevron.svg"
                  alt=""
                />
              </Nav.Link>
            );
          })}
        </Nav>
      </NavBar>
    </div>
  );
};

export default MobileMenu;

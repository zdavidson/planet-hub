import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import PlanetStatistics from "./components/PlanetStatistics";
import MobileMenu from "./components/MobileMenu";
import data from "./data.json";

const App = () => {
  const [planet, setPlanet] = useState({
    name: "",
    overview: {
      content: "",
    },
    structure: { content: "" },
    geology: { content: "", source: "" },
  });
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [geoImage, setGeoImage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPlanet(data[0]);
    setImage(data[0].images.planet);
  }, []);

  return (
    <div id="App">
      {isOpen ? (
        <MobileMenu
          setPlanet={setPlanet}
          setContent={setContent}
          setImage={setImage}
          setGeoImage={setGeoImage}
          setIsOpen={setIsOpen}
        />
      ) : (
        <div></div>
      )}
      <Navigation
        setPlanet={setPlanet}
        setContent={setContent}
        setImage={setImage}
        setGeoImage={setGeoImage}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Container fluid="md">
        <Hero
          planet={planet}
          setContent={setContent}
          setImage={setImage}
          content={content}
          image={image}
          geoImage={geoImage}
          setGeoImage={setGeoImage}
        />
        <PlanetStatistics planet={planet} />
      </Container>
    </div>
  );
};

export default App;

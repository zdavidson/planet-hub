import "./Hero.scss";
import PlanetImage from "./PlanetImage";
import PlanetInfo from "./PlanetInfo";

const Hero = (props) => {
  return (
    <div className="hero">
      <PlanetImage
        planet={props.planet}
        image={props.image}
        geoImage={props.geoImage}
      />
      <PlanetInfo
        planet={props.planet}
        setContent={props.setContent}
        content={props.content}
        setImage={props.setImage}
        setGeoImage={props.setGeoImage}
      />
    </div>
  );
};

export default Hero;

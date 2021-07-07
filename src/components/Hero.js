import "./Hero.scss";
import PlanetImage from "./PlanetImage";
import PlanetInfo from "./PlanetInfo";

const Hero = ({
  planet,
  image,
  geoImage,
  setContent,
  content,
  setImage,
  setGeoImage,
}) => {
  return (
    <div className="hero">
      <PlanetImage planet={planet} image={image} geoImage={geoImage} />
      <PlanetInfo
        planet={planet}
        setContent={setContent}
        content={content}
        setImage={setImage}
        setGeoImage={setGeoImage}
      />
    </div>
  );
};

export default Hero;

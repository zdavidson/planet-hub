import "./Hero.scss";
import PlanetImage from "./PlanetImage";
import PlanetInfo from "./PlanetInfo";

const Hero = (props) => {
  const planet = props.planet;
  const setContent = props.setContent;
  const content = props.content;
  const image = props.image;
  const setImage = props.setImage;
  const geoImage = props.geoImage;
  const setGeoImage = props.setGeoImage;

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

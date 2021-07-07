import "./Hero.scss";
import PlanetImage from "./PlanetImage";
import PlanetInfo from "./PlanetInfo";

const Hero = (props) => {
  const planet = props.planet;
  const setContent = props.setContent;
  const content = props.content;
  const image = props.image;
  const setImage = props.setImage;
  const geoImg = props.geoImg;
  const toggleGeoImg = props.toggleGeoImg;

  return (
    <div className="hero">
      <PlanetImage planet={planet} image={image} geoImg={geoImg} />
      <PlanetInfo
        planet={planet}
        setContent={setContent}
        content={content}
        setImage={setImage}
        toggleGeoImg={toggleGeoImg}
      />
    </div>
  );
};

export default Hero;

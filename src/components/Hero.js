import "./Hero.scss";
import PlanetImage from "./PlanetImage";
import PlanetInfo from "./PlanetInfo";

const Hero = (props) => {
  const planet = props.planet;
  const setContent = props.setContent;
  const content = props.content;
  const image = props.image;
  return (
    <div className="hero">
      <PlanetImage planet={planet} image={image} />
      <PlanetInfo planet={planet} setContent={setContent} content={content} />
    </div>
  );
};

export default Hero;

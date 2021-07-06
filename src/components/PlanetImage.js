import "./PlanetImage.scss";

const PlanetImage = (props) => {
  const image = props.image;
  return (
    <div className="planet-img">
      <img src={image} alt="mercury" />
    </div>
  );
};

export default PlanetImage;

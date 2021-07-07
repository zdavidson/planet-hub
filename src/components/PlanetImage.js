import "./PlanetImage.scss";

const PlanetImage = (props) => {
  const image = props.image;
  const geoImage = props.geoImage;

  return (
    <div className="planet-img">
      <img id="planet-pic" src={image} alt="planet" />

      {geoImage ? (
        <img id="geo-pic" src="./assets/geology-mercury.png" alt="geo-img" />
      ) : (
        <div>empty div</div>
      )}
    </div>
  );
};

export default PlanetImage;

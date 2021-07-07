import "./PlanetImage.scss";

const PlanetImage = ({ image, geoImage }) => {
  return (
    <div className="planet-img">
      <img id="planet-pic" src={image} alt="planet" />

      {geoImage ? (
        <img id="geo-pic" src="./assets/geology-mercury.png" alt="geo-img" />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PlanetImage;

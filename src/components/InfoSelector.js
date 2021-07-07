import "./InfoSelector.scss";

const InfoSelector = (props) => {
  const planet = props.planet;
  const setContent = props.setContent;
  const setImage = props.setImage;
  const setGeoImage = props.setGeoImage;
  return (
    <div className="info-selector">
      <button
        className="selector"
        onClick={() => {
          setContent(planet.overview.content);
          setImage(planet.images.planet);
          setGeoImage(false);
        }}
      >
        <span>01</span> Overview
      </button>

      <button
        className="selector"
        onClick={() => {
          setContent(planet.structure.content);
          setImage(planet.images.internal);
          setGeoImage(false);
        }}
      >
        <span>02</span>Internal Structure
      </button>

      <button
        className="selector"
        onClick={() => {
          setContent(planet.geology.content);
          setGeoImage(true);
        }}
      >
        <span>03</span>Surface Geology
      </button>
    </div>
  );
};

export default InfoSelector;

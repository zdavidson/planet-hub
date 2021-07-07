import "./InfoSelector.scss";

const InfoSelector = ({ planet, setContent, setImage, setGeoImage }) => {
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
        <span className="num">01</span>Overview
      </button>

      <button
        className="selector"
        onClick={() => {
          setContent(planet.structure.content);
          setImage(planet.images.internal);
          setGeoImage(false);
        }}
      >
        <span className="num">02</span>
        <span className="extra-text">Internal </span> Structure
      </button>

      <button
        className="selector"
        onClick={() => {
          setContent(planet.geology.content);
          setImage(planet.images.planet);
          setGeoImage(true);
        }}
      >
        <span className="num">03</span>
        <span className="extra-text">Surface </span> Geology
      </button>
    </div>
  );
};

export default InfoSelector;

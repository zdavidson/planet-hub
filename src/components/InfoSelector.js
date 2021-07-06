import "./InfoSelector.scss";

const InfoSelector = (props) => {
  const planet = props.planet;
  const setContent = props.setContent;
  const setImage = props.setImage;
  return (
    <div className="info-selector">
      <button
        className="selector"
        onClick={() => {
          setContent(planet.overview.content);
          setImage(planet.images.planet);
        }}
      >
        <span>01</span> Overview
      </button>

      <button
        className="selector"
        onClick={() => {
          setContent(planet.structure.content);
          setImage(planet.images.internal);
        }}
      >
        <span>02</span>Internal Structure
      </button>

      <button
        className="selector"
        onClick={() => {
          setContent(planet.geology.content);
          setImage(planet.images.geology);
        }}
      >
        <span>03</span>Surface Geology
      </button>
    </div>
  );
};

export default InfoSelector;

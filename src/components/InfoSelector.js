import "./InfoSelector.scss";

const InfoSelector = (props) => {
  const planet = props.planet;
  const setContent = props.setContent;
  return (
    <div className="info-selector">
      <button
        className="selector"
        onClick={() => setContent(planet.overview.content)}
      >
        <span>01</span> Overview
      </button>

      <button
        className="selector"
        onClick={() => setContent(planet.structure.content)}
      >
        <span>02</span>Internal Structure
      </button>

      <button
        className="selector"
        onClick={() => setContent(planet.geology.content)}
      >
        <span>03</span>Surface Geology
      </button>
    </div>
  );
};

export default InfoSelector;

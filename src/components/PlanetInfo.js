import "./PlanetInfo.scss";
import InfoSelector from "./InfoSelector";
import data from "../data.json";

const PlanetInfo = (props) => {
  const planet = props.planet;
  const setContent = props.setContent;
  const content = props.content;
  const setImage = props.setImage;
  return (
    <div className="planet-info">
      <div className="info-text">
        <h1>{planet.name || data[0].name}</h1>
        <p className="planet-description">
          {content || planet.overview.content || data[0].overview.content}
        </p>
        <div className="planet-source">
          Source:{" "}
          <a href={planet.overview.source || data[0].overview.source}>
            Wikipedia
          </a>
        </div>
      </div>
      <InfoSelector
        planet={planet}
        setContent={setContent}
        setImage={setImage}
      />
    </div>
  );
};

export default PlanetInfo;

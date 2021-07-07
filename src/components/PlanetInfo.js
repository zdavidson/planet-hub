import "./PlanetInfo.scss";
import InfoSelector from "./InfoSelector";

const PlanetInfo = ({ planet, content, setContent, setImage, setGeoImage }) => {
  return (
    <div className="planet-info">
      <div className="info-text">
        <h1>{planet.name}</h1>
        <p className="planet-description">
          {content || planet.overview.content}
        </p>
        <div className="planet-source">
          Source: <a href={planet.overview.source}>Wikipedia</a>
        </div>
      </div>
      <InfoSelector
        planet={planet}
        setContent={setContent}
        setImage={setImage}
        setGeoImage={setGeoImage}
      />
    </div>
  );
};

export default PlanetInfo;

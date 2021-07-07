import "./PlanetInfo.scss";
import InfoSelector from "./InfoSelector";

const PlanetInfo = (props) => {
  const planet = props.planet;

  return (
    <div className="planet-info">
      <div className="info-text">
        <h1>{planet.name}</h1>
        <p className="planet-description">
          {props.content || planet.overview.content}
        </p>
        <div className="planet-source">
          Source: <a href={planet.overview.source}>Wikipedia</a>
        </div>
      </div>
      <InfoSelector
        planet={props.planet}
        setContent={props.setContent}
        setImage={props.setImage}
        setGeoImage={props.setGeoImage}
      />
    </div>
  );
};

export default PlanetInfo;

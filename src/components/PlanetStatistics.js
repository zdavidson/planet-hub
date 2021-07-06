import "./PlanetStatistics.scss";
import data from "../data.json";

const PlanetStatistics = (props) => {
  const planet = props.planet;
  return (
    <div className="planet-statistics">
      <div className="planet-stat">
        <h3>Rotation Time</h3>
        <h2>{planet.rotation || data[0].rotation}</h2>
      </div>
      <div className="planet-stat">
        <h3>Revolution Time</h3>
        <h2>{planet.revolution || data[0].revolution}</h2>
      </div>
      <div className="planet-stat">
        <h3>Radius</h3>
        <h2>{planet.radius || data[0].radius}</h2>
      </div>
      <div className="planet-stat">
        <h3>Average Temp.</h3>
        <h2>{planet.temperature || data[0].temperature}</h2>
      </div>
    </div>
  );
};

export default PlanetStatistics;

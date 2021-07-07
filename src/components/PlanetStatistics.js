import "./PlanetStatistics.scss";

const PlanetStatistics = (props) => {
  const planet = props.planet;
  return (
    <div className="planet-statistics">
      <div className="planet-stat">
        <h3>Rotation Time</h3>
        <h2>{planet.rotation}</h2>
      </div>
      <div className="planet-stat">
        <h3>Revolution Time</h3>
        <h2>{planet.revolution}</h2>
      </div>
      <div className="planet-stat">
        <h3>Radius</h3>
        <h2>{planet.radius}</h2>
      </div>
      <div className="planet-stat">
        <h3>Average Temp.</h3>
        <h2>{planet.temperature}</h2>
      </div>
    </div>
  );
};

export default PlanetStatistics;

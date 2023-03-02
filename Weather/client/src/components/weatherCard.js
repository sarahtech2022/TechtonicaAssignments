const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div className="result">
        <p>
          City:{" "}
          <span className="data">
            {/* //fix the line below this to format it to my data after json function formatted it into an object */}
            {props.data.name}, {props.data.country}
          </span>
        </p>
        <p>
          Description: <span className="data">{props.data.description}</span>
        </p>
        <img src={props.data.icon} alt={"Icon from Open Weather Api"} />
        <p>
          Temperature:{" "}
          <span className="data">
            {props.data.temp} <sup>o</sup>F
          </span>
        </p>
        <p>
          Feels Like:{" "}
          <span className="data">
            {props.data.feels_like} <sup>o</sup>F
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;

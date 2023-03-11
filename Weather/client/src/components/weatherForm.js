const WeatherForm = (props) => {
  //what is inside props = {city, handleCityChange, handleSubmit}
  return (
    <div className="weatherFormMainDiv">
      <div className="container">
        <h1 className="weatherFormHeader">The Weather Forecast</h1>
      </div>
      <br></br>
      <form onSubmit={props.handleSubmit}>
        <div className="formDiv">
          <input
            id="city-name"
            type="text"
            placeholder="Please enter your city"
            name="city"
            value={props.city}
            onChange={props.handleCityChange}
            required // instead of readonly, change to required
            className="searchBar"
          />
          {/* <button type="submit" className="submitButton"></button> */}
          <input type="submit" value="Search" className="submitButton" />
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;

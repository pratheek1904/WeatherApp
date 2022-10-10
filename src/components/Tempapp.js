import "./Css/style.css";
import React, { useEffect, useState } from "react";


const Tempapp = () => {
  const [city, setcity] = useState();
  const [search, setSearch] = useState("Bangalore");


  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ca6a2a2ac8a7142ff5e41f35d49605dd`;
      const response = await fetch(url);
      const resJson = await response.json();
      setcity(resJson.main);
    };
    fetchApi();
  }, [search]);


  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            placeholder="Enter city"
            onChange={(e) => {
            setSearch(e.target.value);
            }}
          ></input>
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                 <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°Cel |Max:{city.temp_max}°Cel{" "}
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;

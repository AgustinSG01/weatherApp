import React, { useState } from "react";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home";
import City from "./components/City";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          if (cities.length === 6) {
            cities.shift();
          }
          const exist = cities.filter((e) => e.id === ciudad.id);
          exist.length
            ? alert("Ciudad ya existente")
            : setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home onSearch={onSearch} cities={cities} onClose={onClose} />
          }
        />
        <Route path="/:id" element={<City ciudad={cities} />} />
      </Routes>
    </div>
  );
}

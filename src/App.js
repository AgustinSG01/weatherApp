import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Swal from 'sweetalert2'

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        console.log("soy la ciudad", recurso)
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
            humedad: recurso.main.humidity
          };
          if (cities.length === 6) {
            cities.shift();
          }
          const exist = cities.filter((e) => e.id === ciudad.id);
          exist.length
            ? Swal.fire({
              position: "center",
              icon: "info",
              title: "The city has already been added",
              showConfirmButton: false,
              timer: 1500,
              background: "#1B1B1B",
              color: "#DDDDDD"
            })
            : setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "City not found",
            showConfirmButton: false,
            timer: 1500,
            background: "#1B1B1B",
            color: "#DDDDDD"
          });
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <Home onSearch={onSearch} cities={cities} onClose={onClose} />
          }
        />
      </Routes>
    </div>
  );
}

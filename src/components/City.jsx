import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./City.module.css";
export default function City({ ciudad }) {
  const { id } = useParams();

  const city = ciudad.find((e) => e.id === parseInt(id));

  return (
    <div className={style.generalContainer}>
      <div className={style.container}>
        <h1 className={style.name}> {city.name} </h1>
        <p> Temperatura: {city.temp} </p>
        <p> Clima: {city.weather} </p>
        <p> Viento: {city.wind} </p>
        <p> Nubes: {city.clouds} </p>
        <p> Latitud: {city.latitud} </p>
        <p> Longitud: {city.longitud} </p>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
}

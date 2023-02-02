import React from "react";
import Card from "./Card.jsx";

export default function Cards(props) {
  return (
    <div className="max-w-[1000px] mx-auto py-4 flex flex-col justify-center h-full px-8">
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 text-center py-8">
        {props.cities.map((x) => (
            <Card
            max={x.max}
              min={x.min}
              name={x.name}
              id={x.id}
              key={x.id}
              img={x.img}
              wind={x.wind}
              humedad={x.humedad}
              onClose={props.onClose}
              />
              ))}
    </div>
   </div>
  );
}

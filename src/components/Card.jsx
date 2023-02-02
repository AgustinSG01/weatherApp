import React from "react";

export default function Card(props) {
  return (
    <div className="flex justify-center hover:scale-110 duration-300">
      <div className="card min-w-sm max-w-sm border border-gray-100 transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-[#1b1b1b] text-[#DDDDDD] rounded-md">
        <h2 className="text-md mb-2 px-4 pt-4">
          <div className="flex justify-between">
            <div className="badge relative top-0">
              <span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4 text-lg">
                {" "}
                {props.name}{" "}
              </span>
            </div>
            <button onClick={() => props.onClose(props.id)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fd4c7a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="#fd4c7a"
                />
              </svg>
            </button>
          </div>
        </h2>

        <div class="flex items-center p-4">
          <div class="flex justify-center items-center w-96">
            <img
              src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
              alt="xd"
            ></img>
          </div>
        </div>
        <div className="text-md pt-4 pb-4 px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <span className="flex space-x-2 items-center">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 32 32"
                  class="fill-current"
                >
                  <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z" fill="#1ca3ec"></path>
                  <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z" fill="#1ca3ec"></path>
                </svg>{" "}
                <span> {props.wind} km/h</span>
              </span>
              <span className="flex space-x-2 items-center">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 32 32"
                  class="fill-current"
                >
                  <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z" fill="#1ca3ec"></path>
                  <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z" fill="#1ca3ec"></path>
                </svg>{" "}
                <span> {props.humedad}% </span>
              </span>
            </div>
            <div>
              <h1 className="text-3xl"> {props.min}° / {props.max}° </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

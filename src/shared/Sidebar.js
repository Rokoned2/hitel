import React from "react";
import iconHome from "../img/SVG/home.svg";
import iconAirCraft from "../img/SVG/aircraft-take-off.svg";
import iconKey from "../img/SVG/key.svg";
import iconMap from "../img/SVG/map.svg";

const Sidebar = () => {
  return (
    <nav class="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item--active">
          <a href="/" class="side-nav__link">
            <img class="side-nav__icon" src={iconHome} alt="icon home" />
            <span>Hotel</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="/" class="side-nav__link">
            <img
              class="side-nav__icon"
              src={iconAirCraft}
              alt="icon airCraft"
            />
            <span>Vuelo</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="/" class="side-nav__link">
            <img class="side-nav__icon" src={iconKey} alt="icon key" />
            <span>Renta de autos</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="/" class="side-nav__link">
            <img class="side-nav__icon" src={iconMap} alt="icon map" />
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div class="legal">
        &copy; 2021 por Hitel. Todos los derechos reservados.
      </div>
    </nav>
  );
};

export default Sidebar;

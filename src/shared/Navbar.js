import React from "react";
import iconChat from "../img/SVG/chat.svg";
import iconMGlass from "../img/SVG/magnifying-glass.svg";
import iconBookmark from "../img/SVG/bookmark.svg";
import userPhoto from "../img/user.jpg";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <header class="header">
      <img src={logo} alt="trillo logo" class="logo" />

      <form action="#" class="search">
        <input type="text" class="search__input" placeholder="Buscar hoteles" />
        <button class="search__button">
          <img
            class="search__icon"
            src={iconMGlass}
            alt="icon Magnifying glass"
          />
        </button>
      </form>

      <nav class="user-nav">
        <div class="user-nav__icon-box">
          <img class="user-nav__icon" src={iconBookmark} alt="icon Bookmark" />
          <span class="user-nav__notification">7</span>
        </div>
        <div class="user-nav__icon-box">
          <img class="user-nav__icon" src={iconChat} alt="iconChat" />
          <span class="user-nav__notification">13</span>
        </div>
        <div class="user-nav__user">
          <img src={userPhoto} alt="Userphoto" class="user-nav__user-photo" />
          <span class="user-nav__user-name">Victor</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

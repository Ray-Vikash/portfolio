import React, { useState } from "react";
import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className={style.navbar}>
      <a className={style.title} href="/">
        Portfolio
      </a>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt=""
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`} onClick={()=> setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

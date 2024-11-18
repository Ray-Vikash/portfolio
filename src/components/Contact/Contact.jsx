import React from "react";
import { getImageUrl } from "../../utils";
import style from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer className={style.container} id="Contact">
      <div className={style.text}>
        <h2 className={style.title}>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={style.links}>
        <li className={style.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:rayvikash71kumar@gmail.com" target="_blank">
            rayvikash71kumar@gmail.com
          </a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="https://www.linkedin.com/in/vikash-ray" target="_blank">
            https://www.linkedin.com/in/vikash-ray
          </a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/Ray-Vikash" target="_blank">
            https://github.com/Ray-Vikash
          </a>
        </li>
      </ul>
    </footer>
  );
};

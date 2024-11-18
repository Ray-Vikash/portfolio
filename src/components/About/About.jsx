import React from "react";
import style from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with the laptop"
          className={style.aboutImg}
        />
        <ul className={style.aboutItems}>
          <li className={style.listItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />

            <div className={style.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm frontend developer with 3 years pf experience in building
                and optimized sites
              </p>
            </div>
          </li>
          <li className={style.listItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />

            <div className={style.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multilple landing pages and have created design
                system as well.
              </p>
            </div>
          </li>
          <li className={style.listItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />

            <div className={style.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimized APIs.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

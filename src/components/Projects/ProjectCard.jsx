/* eslint-disable react/prop-types */
import React from "react";
import { getImageUrl } from "../../utils";
import style from "./ProjectCard.module.css";
export const ProjectCard = ({ project }) => {
  return (
    <div className={style.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={` Image of ${project.title}`}
        className={style.image}
      />
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
      <ul className={style.skills}>
        {project.skills.map((skill, id) => {
          return (
            <li className={style.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={style.links}>
        <a className={style.link} href={project.demo}>
          Demo
        </a>
        <a className={style.link} href={project.source}>
          Source
        </a>
      </div>
    </div>
  );
};

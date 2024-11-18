import React from 'react'
import style from "./Main.module.css";
import {getImageUrl} from "../../utils"
export const Main = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.title}>Hi I'am Vikash</h1>
            <p className={style.description}>I'm a full-stack developer with 3 years of experience using React and NodeJS. Reach out if you'd like to learn more!</p>
            <a className={style.contactMe} href="mailto:rayvikash71kumar@gmail.com">Contact Me</a>
        </div>
        <img className={style.heroImage} src={getImageUrl("hero/heroImage.png")} alt="" />
        <div className={style.topBlur}></div>
        <div className={style.bottomBlur}></div>
    </section>
  )
}

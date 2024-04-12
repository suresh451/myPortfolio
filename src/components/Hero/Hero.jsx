import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Suresh</h1>
            <p className={styles.description}>I'm a front-end developer seeking a chance to demonstrate and improve my abilities. Please let me know if you have any opportunities. <br />ThankYou!</p>
            <a href='mailto:chavvakulasuresh1998@gmail.com' className={styles.contactBtn} target="_blank">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/myImage1.png")} alt="hero" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero

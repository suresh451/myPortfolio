import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/AboutImage.png")} alt="aboutimg" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/curserIcon.png")} alt="curserICon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive
                and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/supportIcon.png")} alt="supportICon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Database Administrator</h3>
                        <p>I have experience in Support the Customer Requests for HANA DB</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About

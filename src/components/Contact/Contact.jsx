import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/Gmail.png")} alt="gmail" />
                <a href="mailto:chavvakulasuresh1998@gmail.com" target="_blank">chavvakulasuresh1998@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/LinkedIn.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/suresh-chavvakula-3247351a6/" target="_blank">Linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/Github.png")} alt="Github" />
                <a href="https://www.github.com/suresh451" target="_blank">Github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact

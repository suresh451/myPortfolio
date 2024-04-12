import React from 'react'
import styles from './Experience.module.css'
import skills from "../../data/skills.json";
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experineces</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })}
            </div>
            <ul className={styles.history}>
                {history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <img src={historyItem.imageSrc} alt={historyItem.role} />
                            <div className={styles.historyItemDetails}>
                                <h3>{historyItem.organisation}, {historyItem.role}</h3>
                                <p>{historyItem.startDate} - {historyItem.endDate}</p>
                                <ul className={styles.ulList}>
                                    {historyItem.experiences.map((experience, id) => {
                                        return (
                                            <li key={id} className={styles.listItem}>{experience}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default Experience

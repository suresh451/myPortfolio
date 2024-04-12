import React from 'react'

import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {
    const {project} = props 
    const {imageSrc, title, description, skills, demo, source} = project
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.span}>(Username:rahul, Password:rahul@2021)</span>
        <p className={styles.description}>{description}</p>
        
          <ul className={styles.skills}>
                              {skills.map((skill, id) => {
                                return <li key={id} className={styles.skill}>{skill}</li>
                              })}
                          </ul>  
      </div> 
      <div>
      <div className={styles.links}>
                              <a href={demo} target="_blank" className={styles.link}>Demo</a>
                              <a href={source} target="_blank" className={styles.link}>Source</a>
                          </div>
      </div> 
                  
                          
    </div>
  )
}

export default ProjectCard

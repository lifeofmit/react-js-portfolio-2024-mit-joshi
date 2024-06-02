import React from 'react';
import styles from './ProjectCardStyles.module.css';


function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" className={styles.container}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3><br />{h3}</h3>
      <p>{p}</p>
      <br /><br />
    </a>
  );
}

export default ProjectCard;

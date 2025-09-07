'use client';
import Card from '../Card/Card';
import styles from './style.module.css';

export default function ProjectList({ projects }) {
  return (
    <div className={styles.gallery}>
      {projects.map((project, index) => (
        <Card
          key={index}
          name={project.name}
          img={project.img}
          year={project.year}
          slug={project.slug}
        />
      ))}
    </div>
  );
}

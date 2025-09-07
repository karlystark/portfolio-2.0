'use client';
import { useState } from 'react';
import Filter from '../components/Filter/Filter';
import ProjectList from '../components/ProjectList/ProjectList';
import projects from '../projects';
import styles from '../components/ProjectList/style.module.css';

function processCategoryData() {
  const categoryData = {};

  projects.forEach((project) => {
    const category = project.type;
    categoryData[category] = (categoryData[category] || 0) + 1;
  });
  return categoryData;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryData = processCategoryData();
  const filteredProjects =
    selectedCategory === null
      ? projects
      : projects.filter((p) => p.type === selectedCategory);

  return (
    <main className={`${styles.main} pt-10 pb-20`}>
      <Filter
        categoryData={categoryData}
        totalCount={projects.length}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProjectList projects={filteredProjects} />
    </main>
  );
}

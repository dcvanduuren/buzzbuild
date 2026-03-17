import React, { useState } from 'react';
import { TranslationData } from '../../translations';

const projectData = [
  {
    id: 1,
    title: 'Badkamer 1',
    folder: 'badkamer 1',
    images: ["1.webp", "FullSizeRender (1).webp", "FullSizeRender (2).webp", "FullSizeRender.webp", "IMG_2284.webp", "IMG_2327 (1).webp", "IMG_2332.webp", "IMG_2338.webp"]
  },
  {
    id: 3,
    title: 'Badkamer 3',
    folder: 'badkamer 3',
    images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "R0001041.webp", "R0001052.webp", "R0001056.webp", "R0001059.webp"]
  },
  {
    id: 2,
    title: 'Badkamer 2',
    folder: 'badkamer 2',
    images: ["1.webp", "2.webp", "IMG_5633.webp", "IMG_5640.webp", "IMG_5649.webp"]
  },
  {
    id: 4,
    title: 'Badkamer 4',
    folder: 'badkamer 4',
    images: ["Badkamer_femke_Clean_1 (1).webp", "Badkamer_femke_Clean_2 (1).webp"]
  }
];

/** Get the optimized full-size image path */
const getOptimizedSrc = (folder: string, image: string) =>
  `/assets/images/optimized/${folder}/${image}`;

/** Get the thumbnail image path */
const getThumbSrc = (folder: string, image: string) => {
  const base = image.replace(/\.webp$/, '');
  return `/assets/images/optimized/${folder}/${base}-thumb.webp`;
};

interface ProjectItem {
  id: number;
  title: string;
  folder: string;
  images: string[];
}

interface ProjectsProps {
  t: TranslationData;
}

export const Projects = ({ t }: ProjectsProps) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: ProjectItem) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
    // Preload all images for this project so scrolling is instant
    project.images.forEach((img) => {
      const preload = new Image();
      preload.src = getOptimizedSrc(project.folder, img);
    });
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // re-enable scrolling
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
    }
  };

  return (
    <section id="projecten" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.projects.title}</h2>
          <p className="subtext" style={{ color: 'var(--text-muted)' }}>{t.projects.subtitle}</p>
        </div>

        <div className="responsive-grid grid-2" style={{ gap: '24px' }}>
          {projectData.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openProject(project)}>
              <img
                src={getThumbSrc(project.folder, project.images[0])}
                alt={project.title}
                className="project-card-img"
                loading="lazy"
              />
              <div className="project-card-overlay">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="project-card-overlay-text">Bekijk {project.images.length} foto's</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject}>&times;</button>

            {activeProject.images.length > 1 && (
              <button className="modal-btn modal-prev" onClick={prevImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            )}

            <img
              src={getOptimizedSrc(activeProject.folder, activeProject.images[currentImageIndex])}
              alt={`${activeProject.title} foto`}
              className="modal-img"
            />

            {activeProject.images.length > 1 && (
              <button className="modal-btn modal-next" onClick={nextImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            )}

            <div style={{ position: 'absolute', bottom: '-40px', color: 'white', opacity: 0.7 }}>
              {currentImageIndex + 1} / {activeProject.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

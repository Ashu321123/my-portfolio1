import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://your-demo-link.com'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality',
      technologies: ['React', 'CSS3', 'Local Storage'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://your-demo-link.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecast weather data',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      github: 'https://github.com/yourusername/project3',
      demo: 'https://your-demo-link.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

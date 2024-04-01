import React from 'react';
import Card from './Card';

interface ProjectData {
  production_name: string;
  repository: string;
  image: string;
  description: string;
  learning_goals: string;
  tech_stack: string[];
}

interface ProjectList {
  Projects: ProjectData[];
}

interface ProjectProps {
  apiData: ProjectList;
}

const Project: React.FC<ProjectProps> = ({ apiData }) => {
  const formatLearningGoals = (goals: string) => {
    const goalsArray = goals.split('•');
    const filteredGoals = goalsArray.filter(goal => goal.trim() !== '');
    return filteredGoals.map((goal, index) => (
      <li key={index}>{goal.trim()}</li>
    ));
  };

  return (
    <div>
      <h1>Featured Projects</h1>
      <Card
        items={apiData.Projects}
        renderItem={(project: ProjectData, index: number) => (
          <div key={index}>
            <h3>{project.production_name}</h3>
            <div style={{ maxWidth: '600px', maxHeight: '400px', overflow: 'hidden', margin: '0 auto' }}>
              <img
                src={project.image}
                alt={project.production_name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p style={{ wordWrap: 'break-word' }}>
              <strong>Repository:</strong>{' '}
              <a href={project.repository} target="_blank" rel="noopener noreferrer" style={{ maxWidth: '100%', overflow: 'hidden', display: 'block' }}>
                {project.repository}
              </a>
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <div style={{ textAlign: 'center' }}>
                <strong>Learning Goals:</strong>
              </div>
              <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                {formatLearningGoals(project.learning_goals)}
              </ul>
            </p>
            <div style={{ textAlign: 'center' }}>
              <strong>Tech Stack:</strong>
            </div>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              {project.tech_stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      />

    </div>
  );
};

export default Project;




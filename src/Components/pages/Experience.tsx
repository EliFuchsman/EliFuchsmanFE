import React from 'react';
import Card from './Card';

interface ExperienceData {
  company: string;
  position: string;
  employment_type: string;
  address: string;
  website: string;
  start: string;
  end: string;
  description: string;
}

interface ExperienceHistory {
  History: ExperienceData[];
}

interface ExperienceProps {
  apiData: ExperienceHistory
}

const Experience: React.FC<ExperienceProps> = ({ apiData }) => {
  console.log('apiData:', apiData)

  if (!apiData.History || apiData.History.length === 0) {
    return <div>No experience data available</div>;
  }

  return (
    <div>
      <h2>Experience</h2>
      <Card
        items={apiData.History}
        renderItem={(experience: ExperienceData, index: number) => (
          <div key={index}>
            <h3>{experience.company}</h3>
            <p>{experience.position}</p>
            <p>{experience.employment_type}</p>
            <p>
              <a href={experience.website} target="_blank" rel="noopener noreferrer">{experience.website}</a>
            </p>
            {experience.address !== 'N/A' ? (<p>{experience.address}</p>
            ) : null}
            <p>{experience.start} to {experience.end}</p>
            <div className="details">
              {experience.description.split('\n').map((sentence: string, idx: number) => (
                <p key={idx}>{sentence}</p>
              ))}
            </div>

          </div>
        )}
      />
    </div>
  );
};

export default Experience;

import React from 'react';
import Card from './Card';

interface EducationData {
  education_type: string;
  name: string;
  city: string;
  state: string;
  degree: string;
  major: string;
  from: string;
  to: string;
}

interface EducationHistory {
  History: EducationData[];
}

interface EducationProps {
  apiData: EducationHistory;
}

const Education: React.FC<EducationProps> = ({ apiData }) => {
  if (!apiData.History || apiData.History.length === 0) {
    return <div>No education data available</div>;
  }

  return (
    <div>
      <h2>Education</h2>
      <Card
        items={apiData.History}
        renderItem={(education: EducationData, index: number) => (
          <div key={index}>
            <h3>{education.name}</h3>
            <p>{education.degree} in {education.major}</p>
            <p>{education.city}, {education.state}</p>
            <p>{education.from} - {education.to}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Education;

// Page.tsx
import "./Page.css";
import React, { useEffect, useState } from 'react';
import { getInfo, getSummary, getEducation, getProjects, getExperience } from '../../utilities/utils';
import Summary from './Summary';
import Info from './Info'
import Education from './Education';
import Project from './Project'
import Experience from './Experience'

interface PageProps {
  apiType: 'summary' | 'info' | 'education' | 'projects' | 'experience';
  onReturn?: () => void;
  urlPath: string;
  apiKey: string;
}

const Page: React.FC<PageProps> = ({ apiType, onReturn, urlPath, apiKey }) => {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (apiType) {
          case 'summary':
            data = await getSummary(`${urlPath}/summary`, apiKey);
            break;
          case 'info':
            data = await getInfo(`${urlPath}/info`, apiKey);
            break;
          case 'education':
            data = await getEducation(`${urlPath}/education`, apiKey);
            break;
          case 'projects':
            data = await getProjects(`${urlPath}/projects`, apiKey);
            break;
          case 'experience':
            data = await getExperience(`${urlPath}/experience`, apiKey);
            break;
          default:
            throw new Error('Invalid API type');
        }
        setApiData(data);
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [apiType, urlPath, apiKey]);

  const renderContent = () => {
    if (!apiData) {
      return <p></p>;
    }

    switch (apiType) {
      case 'summary':
        return <Summary apiData={apiData} />;
      case 'info':
        return <Info apiData={apiData} />;
      case 'education':
        return <Education apiData={apiData} />;
      case 'projects':
        return <Project apiData={apiData} />;
      case 'experience':
        return <Experience apiData={apiData} />;
      default:
        return <p>No content available for this API type.</p>;
    }
  };

  return (
    <div className="page">
      <button onClick={onReturn}>Return</button>
      {renderContent()}
    </div>
  );
};

export default Page;

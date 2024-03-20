// Page.tsx
import "./Page.css";
import React, { useEffect, useState } from 'react';
import { getInfo, getSummary, getEducation, getProjects } from '../../utilities/utils';
import Summary from './Summary';
import Info from './Info'
import Education from './Education';
import Project from './Project'

interface PageProps {
  apiType: 'summary' | 'info' | 'education' | 'projects';
  onReturn?: () => void;
}

const Page: React.FC<PageProps> = ({ apiType, onReturn }) => {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (apiType) {
          case 'summary':
            data = await getSummary();
            break;
          case 'info':
            data = await getInfo();
            break;
          case 'education':
            data = await getEducation();
            break;
          case 'projects':
            data = await getProjects();
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
  }, [apiType]);

  const renderContent = () => {
    if (!apiData) {
      return <p>Loading data...</p>;
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

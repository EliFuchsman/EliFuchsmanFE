// RedPage.tsx
import "./RedPage.css";
import React, { useEffect, useState } from 'react';
import { getInfo, getSummary } from '../../utilities/utils';
import RedPageSummary from './RedPageSummary';
import RedPageInfo from './RedPageInfo'

interface RedPageProps {
  apiType: 'summary' | 'info';
  onReturn?: () => void;
}

const RedPage: React.FC<RedPageProps> = ({ apiType, onReturn }) => {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = apiType === 'summary' ? await getSummary() : await getInfo();
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
        return <RedPageSummary apiData={apiData} />;
      case 'info':
        return <RedPageInfo apiData={apiData} />;

      default:
        return <p>No content available for this API type.</p>;
    }
  };

  return (
    <div className="red-page">
      <button onClick={onReturn}>Return</button>
      {renderContent()}
    </div>
  );
};

export default RedPage;

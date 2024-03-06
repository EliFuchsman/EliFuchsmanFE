import "./RedPage.css";
import { getInfo, getSummary } from '../../utilities/utils';
import React, { useEffect, useState } from 'react';


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

  return (
    <div className="red-page">
      <button onClick={onReturn}>Return</button>
      {apiData ? (
        <div style={{ color: 'white' }}>
          {/* Output the API data here */}
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default RedPage;

// Summary.tsx
import React, { useEffect, useState } from 'react';

interface SummaryProps {
  apiData: { summary: string };
}

const Summary: React.FC<SummaryProps> = ({ apiData }) => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    if (apiData) {
      setParagraphs(apiData.summary.split('\n\n'));
    }
  }, [apiData]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {paragraphs.length > 0 ? (
        <div>
          {paragraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Summary;

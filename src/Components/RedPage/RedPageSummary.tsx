// RedSummaryPage.tsx
import React, { useEffect, useState } from 'react';

interface RedPageSummaryProps {
  apiData: { summary: string };
}

const RedPageSummary: React.FC<RedPageSummaryProps> = ({ apiData }) => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    if (apiData) {
      setParagraphs(apiData.summary.split('\n\n'));
    }
  }, [apiData]);

  return (
    <div>
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

export default RedPageSummary;

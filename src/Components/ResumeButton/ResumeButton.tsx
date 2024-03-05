import "./ResumeButton.css"

const ResumeButton: React.FC = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('http://localhost:8000/resume');

      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }

      const blob = await response.blob();

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'Eli Fuchsman Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <button className="resume-button" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default ResumeButton;

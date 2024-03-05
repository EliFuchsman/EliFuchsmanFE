import "./LinkedInButton.css"

const LinkedInButton: React.FC = () => {
  const handleLinkedInRedirect = () => {
    window.location.href = "https://www.linkedin.com/in/elifuchsman/";
  };

  return (
    <button className="linkedin-button" onClick={handleLinkedInRedirect}>
      Visit LinkedIn
    </button>
  );
};

export default LinkedInButton;

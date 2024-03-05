import "./GitHubButton.css"

const GitHubButton: React.FC = () => {
  const handleGitHubRedirect = () => {
    window.location.href = "https://www.linkedin.com/in/elifuchsman/";
  };

  return (
    <button className="github-button" onClick={handleGitHubRedirect}>
      Visit GitHub
    </button>
  );
};

export default GitHubButton;

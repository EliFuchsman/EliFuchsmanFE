import "./Button.css"

interface Props {
  variation: string;
  link?: string;
  buttonText: string;
}

const Button = (props: Props) => {
  const { variation, link, buttonText } = props;

  const handleClick = async () => {
    if (link && (variation === "github" || variation === "linkedin")) {
      window.open(link, '_blank');
    }

    if (link && variation === "resume") {
      try {
        const response = await fetch(link);

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
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;

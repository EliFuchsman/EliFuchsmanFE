import "./Link.css"

interface LinkProps {
  handleClick: () => void;
  linkText: string;
}

const Link = (linkProps: LinkProps) => {
  const { linkText, handleClick } = linkProps;

  return (
    <div className="link-container" onClick={handleClick}>
      <span className="link-text">{linkText}</span>
    </div>
  );
};

export default Link

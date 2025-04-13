
import { Link } from "react-router-dom";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

const CTAButton = ({ 
  text, 
  href, 
  variant = "primary", 
  className = "", 
  external = false 
}: CTAButtonProps) => {
  const baseClass = variant === "primary" 
    ? "btn-primary" 
    : variant === "secondary" 
      ? "btn-secondary" 
      : "btn-outline";
  
  if (external) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${baseClass} inline-block ${className}`}
      >
        {text}
      </a>
    );
  }
  
  return (
    <Link to={href} className={`${baseClass} inline-block ${className}`}>
      {text}
    </Link>
  );
};

export default CTAButton;

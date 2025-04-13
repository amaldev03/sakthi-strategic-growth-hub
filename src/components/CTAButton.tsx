
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
    ? "bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors font-semibold" 
    : variant === "secondary" 
      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md transition-colors font-semibold" 
      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-md transition-colors font-semibold";
  
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

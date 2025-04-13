
interface ImagePlaceholderProps {
  alt: string;
  className?: string;
}

const ImagePlaceholder = ({ alt, className = "" }: ImagePlaceholderProps) => {
  return (
    <div className={`bg-gray-200 rounded-md flex items-center justify-center ${className}`}>
      <span className="text-gray-500">{alt}</span>
    </div>
  );
};

export default ImagePlaceholder;

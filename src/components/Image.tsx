import { useState } from "react";

interface ImageProps {
  src?: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

const Image = ({
  src,
  alt,
  className = "",
  placeholderClassName = "",
}: ImageProps) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`bg-gray-100 rounded-md flex items-center justify-center ${placeholderClassName}`}
      >
        <span className="text-gray-500 p-4 text-center">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default Image;

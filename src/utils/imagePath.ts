export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, use the path as is (with leading slash removed)
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // In production (GitHub Pages), prepend the repository name
  return `/sakthi-strategic-growth-hub/${cleanPath}`;
};

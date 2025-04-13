export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Return path with leading slash
  return `/${cleanPath}`;
};

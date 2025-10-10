/**
 * Get the base path for the application
 * Used for GitHub Pages deployment where the site is hosted at /AmeenS/
 */
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/AmeenS' : '';
};

/**
 * Get the full path for an asset including the base path
 * @param path - The asset path starting with /
 * @returns The full path with base path prefix in production
 */
export const getAssetPath = (path: string) => {
  const basePath = getBasePath();
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

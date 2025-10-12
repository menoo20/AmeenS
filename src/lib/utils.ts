/**
 * Get the base path for the application
 * Returns empty string for custom domain deployment
 */
export const getBasePath = () => {
  return '';
};

/**
 * Get the full path for an asset
 * @param path - The asset path starting with /
 * @returns The full path (no base path needed for custom domain)
 */
export const getAssetPath = (path: string) => {
  // Ensure path starts with /
  return path.startsWith('/') ? path : `/${path}`;
};

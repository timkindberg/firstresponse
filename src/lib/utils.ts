// Helper function to handle basePath for images in GitHub Pages deployment
export const getImageUrl = (url: string): string => {
  // For custom domain deployment, no basePath is needed
  // The basePath is only needed when using the default github.io subdomain
  return url;
}; 
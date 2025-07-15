// Helper function to handle basePath for images in GitHub Pages deployment
export const getImageUrl = (url: string): string => {
  // Check for GitHub Pages deployment using the custom environment variable
  const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
  const basePath = isGitHubPages ? '/firstresponse' : '';
  return `${basePath}${url}`;
}; 
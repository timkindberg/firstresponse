// Instagram API integration
// This file handles fetching Instagram posts from the Basic Display API

export interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  thumbnail_url?: string;
}

export interface InstagramUser {
  id: string;
  username: string;
  account_type: 'PERSONAL' | 'BUSINESS';
  media_count: number;
}

// Instagram API configuration
const INSTAGRAM_API_BASE = 'https://graph.instagram.com';
const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

// Fetch Instagram user info
export async function getInstagramUser(): Promise<InstagramUser | null> {
  if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
    console.warn('Instagram API credentials not configured');
    return null;
  }

  try {
    const response = await fetch(
      `${INSTAGRAM_API_BASE}/${INSTAGRAM_USER_ID}?fields=id,username,account_type,media_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Instagram user:', error);
    return null;
  }
}

// Fetch Instagram posts
export async function getInstagramPosts(limit: number = 6): Promise<InstagramPost[]> {
  if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
    console.warn('Instagram API credentials not configured');
    return getFallbackPosts();
  }

  try {
    const response = await fetch(
      `${INSTAGRAM_API_BASE}/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,caption,timestamp,thumbnail_url&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return getFallbackPosts();
  }
}

// Fallback posts when API is not configured or fails
function getFallbackPosts(): InstagramPost[] {
  return [
    {
      id: 'fallback-1',
      media_type: 'IMAGE',
      media_url: '/images/gallery/tree-removal-crane.jpg',
      permalink: 'https://www.instagram.com/first_response_tree_service/',
      caption: 'Professional crane-assisted tree removal in action! Our team safely removes large trees using state-of-the-art equipment. #TreeRemoval #CraneWork #Professional',
      timestamp: new Date().toISOString(),
    },
    {
      id: 'fallback-2',
      media_type: 'IMAGE',
      media_url: '/images/gallery/two-crane-tree-removal.jpg',
      permalink: 'https://www.instagram.com/first_response_tree_service/',
      caption: 'Dual crane operation for complex tree removal. Safety and precision are our top priorities! #DualCrane #TreeService #SafetyFirst',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    },
    {
      id: 'fallback-3',
      media_type: 'IMAGE',
      media_url: '/images/gallery/debris-cleanup.jpg',
      permalink: 'https://www.instagram.com/first_response_tree_service/',
      caption: 'Complete cleanup after tree removal. We leave your property spotless! #Cleanup #ProfessionalService #TreeRemoval',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    },
    {
      id: 'fallback-4',
      media_type: 'IMAGE',
      media_url: '/images/gallery/brush-cleanup.jpeg',
      permalink: 'https://www.instagram.com/first_response_tree_service/',
      caption: 'Brush and debris cleanup services. Professional results every time! #BrushCleanup #LandClearing #Professional',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    },
    {
      id: 'fallback-5',
      media_type: 'IMAGE',
      media_url: '/images/gallery/crane-tree.jpeg',
      permalink: 'https://www.instagram.com/first_response_tree_service/',
      caption: 'Large tree removal using professional crane equipment. Expert tree care services! #CraneWork #TreeRemoval #ExpertService',
      timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    },
    {
      id: 'fallback-6',
      media_type: 'IMAGE',
      media_url: '/images/gallery/holding-line.jpeg',
      permalink: 'https://www.instagram.com/first_response_tree_service/',
      caption: 'Precision tree work with safety lines. Our experienced team handles every job with care! #SafetyLines #PrecisionWork #TreeCare',
      timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days ago
    }
  ];
}

// Format date for display
export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

// Truncate caption for display
export function truncateCaption(caption: string, maxLength: number = 100): string {
  if (!caption || caption.length <= maxLength) return caption || '';
  return caption.substring(0, maxLength) + '...';
}

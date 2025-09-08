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
    throw new Error('Instagram API credentials not configured');
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
    throw new Error('Error fetching Instagram posts');
  }
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

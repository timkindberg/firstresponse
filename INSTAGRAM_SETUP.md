# Instagram API Setup Guide

This guide will help you connect your Instagram account to display real posts on your website.

## Step 1: Create a Facebook App **(HIM)**

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" as the app type
4. Fill in your app details:
   - App Name: "First Response Tree Service Website"
   - App Contact Email: your email
   - App Purpose: "Website integration"

## Step 2: Add Instagram Basic Display Product **(HIM)**

1. In your Facebook App dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Click "Create New App" in the Instagram Basic Display section

## Step 3: Configure Instagram Basic Display **(ME)**

1. In the Instagram Basic Display settings:
   - Valid OAuth Redirect URIs: Add your website URL (e.g., `https://yourdomain.com`)
   - Deauthorize Callback URL: Add your website URL
   - Data Deletion Request URL: Add your website URL

## Step 4: Get Your Instagram User ID **(HIM)**

1. Go to the Instagram Basic Display section
2. Click "Generate Token"
3. This will open Instagram's authorization page
4. Log in with your Instagram account
5. Copy the User ID from the response
6. **Send the User ID to your developer (ME)**

## Step 5: Get Your Access Token **(HIM)**

1. After getting the User ID, you'll also get an access token
2. This token expires in 1 hour, so you need to exchange it for a long-lived token
3. **Send the short-lived access token to your developer (ME)**

## Step 6: Exchange for Long-lived Token **(ME)**

I'll handle this technical step by making a GET request to:
```
https://graph.instagram.com/access_token
  ?grant_type=ig_exchange_token
  &client_secret={your-app-secret}
  &access_token={short-lived-token}
```

## Step 7: Set Up Environment Variables **(ME)**

I'll create the `.env.local` file in your project with:

```env
# Instagram API Configuration
NEXT_PUBLIC_INSTAGRAM_USER_ID=your_instagram_user_id_here
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
```

## Step 8: Refresh Token (Important!) **(ME)**

Instagram access tokens expire after 60 days. I'll set up automated token refresh:

Make a GET request to:
```
https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token={current-access-token}
```

## Summary of Responsibilities

### **CLIENT (HIM) - 15 minutes of work:**
- ✅ Create Facebook App
- ✅ Add Instagram Basic Display product
- ✅ Generate Instagram User ID and short-lived token
- ✅ Send credentials to developer

### **DEVELOPER (ME) - Technical setup:**
- ✅ Configure OAuth redirect URLs
- ✅ Exchange short-lived token for long-lived token
- ✅ Set up environment variables
- ✅ Handle token refresh automation
- ✅ Test and deploy

## Testing

Once set up, your website will:
1. Try to fetch real Instagram posts from your account
2. Fall back to placeholder posts if the API is not configured
3. Show a loading state while fetching posts

## Troubleshooting

- **"Instagram API credentials not configured"**: Check your environment variables
- **"Instagram API error"**: Verify your access token is valid and not expired
- **"No posts showing"**: Make sure your Instagram account has public posts

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your access tokens secure
- Set up token refresh automation for production use

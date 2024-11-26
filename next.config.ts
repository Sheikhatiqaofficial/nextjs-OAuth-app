import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for better debugging in development
  // Environment variables for production (on Vercel)
  env: {
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID, // Expose GitHub Client ID
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET, // Expose GitHub Client Secret
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000/', // Set the NEXTAUTH_URL for authentication
  },
  
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Is se typescript ke errors build ko nahi rokeinge
    ignoreBuildErrors: true,
  },
  eslint: {
    // Is se eslint ki warnings bhi ignore ho jayeingi
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


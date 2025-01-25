/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns:[
        {protocol:"https",hostname:"cdn.sanity.io"}
      ] // Add this line to allow images from Sanity
      },
};

export default nextConfig;

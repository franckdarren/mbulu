/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "img.clerk.com",
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: "horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app",
                pathname: "**"
            },
        ],

    }
};

export default nextConfig;

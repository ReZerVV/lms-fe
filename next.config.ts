import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: `${process.env.NEXT_PUBLIC_HOSTNAME_URI}`
            }
        ]
    }
};

export default nextConfig;

if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.farefreelondon.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Cache static assets
  async headers() {
    return [
      {
        source: "/favicon/:path*", // Cache all files in the /favicon directory
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000", // Cache for 1 year
          },
        ],
      },
      {
        source: "/fonts/:path*", // Cache all files in the /fonts directory
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000", // Cache for 1 year
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

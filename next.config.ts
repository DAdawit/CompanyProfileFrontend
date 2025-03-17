import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// import type { NextConfig } from "next";
// import withExportImages from "next-export-optimize-images";

// const nextConfig: NextConfig = withExportImages({
//   output: "export",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "**",
//         // port: "8000",
//         // pathname: "/**",
//       },
//     ],
//   },
// });

// export default nextConfig;

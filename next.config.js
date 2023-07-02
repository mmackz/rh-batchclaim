/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: false,
   webpack: (config) => {
      config.externals.push("pino-pretty", "lokijs", "encoding");
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
   }
};

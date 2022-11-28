const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
  disable: process.env.NODE_ENV === "development",
  register: false,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  publicExcludes: ["favicon/*/**", "audio/**"],
});

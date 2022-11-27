// const withPWA = require("next-pwa")({
//   reactStrictMode: true,
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//   },
// });

// module.exports = withPWA();

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
  disable: process.env.NODE_ENV === "development",
});

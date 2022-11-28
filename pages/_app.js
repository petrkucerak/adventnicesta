import "../styles/dist.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register(
        `/OneSignalSDKWorker.js`
      ).then(/*reg => console.log(reg)*/);
    }
  }, []);

  // notifications
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "575b275b-b7c2-48db-951e-c26ae2cc4a0c",
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount
  return <Component {...pageProps} />;
}

export default MyApp;

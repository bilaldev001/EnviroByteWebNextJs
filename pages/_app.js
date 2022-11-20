import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import '../styles/flaticon.css';
import '../styles/fontawesome.min.css';
import "react-accessible-accordion/dist/fancy-example.css";
import 'react-tabs/style/react-tabs.css';
import "swiper/css/bundle";

// Globals CSS
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-RMCG4QY4VP"></script>
          <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-RMCG4QY4VP');
          </script>
        <title>EnviroByte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop />
    </>
  );
}

export default MyApp;

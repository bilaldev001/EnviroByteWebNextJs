import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css/bundle";

// Globals CSS
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          				ga('create', 'G-RMCG4QY4VP', 'auto');
          				ga('send', 'pageview');
        			`}
        </Script>
        <title>EnviroByte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="/Favicon_20221121.png" />
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop />
    </>
  );
}

export default MyApp;

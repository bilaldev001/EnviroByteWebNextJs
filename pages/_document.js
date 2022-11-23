import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * This is a custom document that is used to render the initial HTML
 */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
          />
          {/*<link rel="icon" type="image/png" href="/favicon.png"></link>*/}
          <link rel="icon" href="/Favicon_20221121.png" sizes="any"></link>
          <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
          <link rel="manifest" href="../site.webmanifest"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

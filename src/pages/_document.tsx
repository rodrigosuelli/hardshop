import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta
            name="description"
            content="Ferramenta de controle de estoque e vendas."
          />
          <meta name="apple-mobile-web-app-title" content="Hardshop" />
          <meta name="application-name" content="Hardshop" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* Open Graph */}
          <meta property="og:url" content="https://hardshop.vercel.app/" />
          <meta
            property="og:description"
            content="Ferramenta de controle de estoque e vendas."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/hardshop-logo-1200x630.png" />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="hardshop.vercel.app" />
          <meta property="twitter:url" content="https://hardshop.vercel.app/" />
          <meta
            name="twitter:description"
            content="Ferramenta de controle de estoque e vendas."
          />
          <meta name="twitter:image" content="/hardshop-logo-1200x630.png" />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          {/* Roboto GFonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
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

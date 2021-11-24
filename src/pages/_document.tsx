import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          {/* Roboto GFonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          {/* Description, Keywords, Robots */}
          <meta
            name="description"
            content="Ferramenta de controle de estoque e vendas."
          />
          <meta
            name="keywords"
            content="hardshop, venda de hardware, controle de estoque, ferramenta, controle de vendas, ferramenta de controle de estoque e vendas"
          />
          <meta name="robots" content="index, follow" />
          {/* Favicon */}
          <meta name="apple-mobile-web-app-title" content="Hardshop" />
          <meta name="application-name" content="Hardshop" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
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
          {/* Open Graph */}
          <meta property="og:url" content="https://hardshop.vercel.app/" />
          <meta
            property="og:description"
            content="Ferramenta de controle de estoque e vendas."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://hardshop.vercel.app/hardshop-logo-1200x1200.png"
          />
          <meta property="og:image:alt" content="logo" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="hardshop.vercel.app" />
          <meta property="twitter:url" content="https://hardshop.vercel.app/" />
          <meta
            name="twitter:description"
            content="Ferramenta de controle de estoque e vendas."
          />
          <meta
            name="twitter:image"
            content="https://hardshop.vercel.app/hardshop-logo-1200x1200.png"
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

import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Torii(鳥居) is the testing tool for Jinja2. You can test or use Jinja2 by trial with Torii."
          />
          <meta
            property="og:title"
            content="Torii(鳥居) - The testing tool for Jinja2."
          />
          <meta
            property="og:description"
            content="Torii(鳥居) is the testing tool for Jinja2. You can test or use Jinja2 by trial with Torii."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://torii.shirakiya.com/" />
          <meta property="og:site_name" content="Torii(鳥居)" />
          <meta
            property="og:image"
            content="https://torii.shirakiya.com/torii_og.png"
          />
          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@shirakiya831" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

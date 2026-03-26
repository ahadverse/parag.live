import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class WebDocument extends Document {
  render() {
    return (
      <Html lang='en-US' data-theme='dark'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-S5SPEY3G38'
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S5SPEY3G38');
            `}
          </Script>
          <meta
            name='google-site-verification'
            content='calZG0FNtPPNU-IvNqzYv_1R_fyUbfj_KEDCV1h3zlk'
          />
        </Head>
        <body>
          {/* Theme initialization script — runs before React hydration to prevent flash */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme') || 'dark';
                    document.documentElement.setAttribute('data-theme', theme);
                  } catch(e) {}
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebDocument;

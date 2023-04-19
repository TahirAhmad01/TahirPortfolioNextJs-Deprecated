import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="shortcut icon"
          sizes="16x16"
          href="/favicon/favicon-16x16.ico"
        />
        <link
          rel="shortcut icon"
          sizes="32x32"
          href="/favicon/favicon-32x32.ico"
        />
        <link
          rel="shortcut icon"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.ico"
        />
        <link
          rel="shortcut icon"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="apple-touch-icon"
          href="/favicon/apple-touch-icon.ico"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="author" content="Qubartech" />
        <meta name="description" content="QubarTech is a tech farm company" />
        <meta
          name="keywords"
          content="Qubartech, tech, tech company, technology"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
          async
        ></script>
        <script
          src="https://kit.fontawesome.com/f70f4c2534.js"
          crossorigin="anonymous"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

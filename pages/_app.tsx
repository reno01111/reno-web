import { AppProps } from "next/app";
import { Noto_Serif_JP } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";
import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/home-index.css";
import "@/styles/contact.css";

const notoSerifJP = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSerifJP.className}>
      {/* Google Analytics のスクリプト */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5L3RKGNE4D"
        strategy="afterInteractive" // ページのインタラクティブ後に実行
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5L3RKGNE4D');
        `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

import Header from "./header/_header";
import Footer from "./footer/_footer";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Header />
        <div className="top_margin"></div>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}

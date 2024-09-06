import { AppProps } from "next/app";
import { Noto_Serif_JP } from "next/font/google";

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
      <Component {...pageProps} />
    </div>
  );
}

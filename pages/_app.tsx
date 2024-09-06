import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", process.env.GA_ID as string, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={notoSerifJP.className}>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.GA_ID as string} />
    </div>
  );
};

export default App;

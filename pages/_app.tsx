import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    handleRouteChange(window.location.pathname);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={notoSerifJP.className}>
      <Component {...pageProps} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </div>
  );
}

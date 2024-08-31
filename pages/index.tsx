import Image from "next/image";
import Seo from "./_seo";

export default function Home() {
  return (
    <div className="home-bg">
      <Seo
        pageTitle={"ホーム"}
        pageDescription={"このページはホームページです。"}
        pageImg={"https://reno.pages.dev/images/site-ogp.jpg"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      {/*  */}
      <div className="home-index paper-texture">
        <h1>RenoWebSite</h1>
        <div className="home-index-underline"></div>
        <p>This site is my portfolios page.</p>
        <p>- このサイトは私のポートフォリオサイトです。</p>
      </div>
      <div className="home-index home-index2">
        <h2>index</h2>
      </div>
      <div className="home-index home-index3">
        <h2>index</h2>
      </div>
    </div>
  );
}

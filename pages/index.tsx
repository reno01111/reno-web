import Image from "next/image";
import Seo from "./_seo";

import HomeBlog from "./blog/_HomeBlog";

export default function Home() {
  return (
    <div className="home-bg">
      <Seo
        pageTitle={"ホーム"}
        pageDescription={"このページはホームページです。"}
        pageImg={"https://renodevelop.pages.dev/images/site-ogp.jpg"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <div>
        {/* 1 */}
        <div className="home-index paper-texture">
          <h1>RenoWebSite</h1>
          <div className="home-index-underline"></div>
          <p>Happy Hacking!</p>
        </div>
        {/* 2 */}
        <div className="home-index home-index2">
          <HomeBlog />
        </div>
      </div>
      <div className="home-index3 h-screen">
        <h2>index</h2>
      </div>
    </div>
  );
}

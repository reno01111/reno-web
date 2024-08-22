import Image from "next/image";
import Seo from "./_seo";

export default function Home() {
  return (
    <>
      <Seo
        pageTitle={"ホーム"}
        pageDescription={"このページはホームページです。"}
        pageImg={"https://reno.pages.dev/images/site-ogp.jpg"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <div className="home-index">
        <div>
          <h1>Page Content.</h1>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import Seo from "../_seo";

export function Privacy() {
  return (
    <div>
      <Seo
        pageTitle={"Privacy Policy"}
        pageDescription={"このページは当サイトのプライです。"}
        pageImg={"https://reno.pages.dev/images/site-ogp.jpg"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
    </div>
  );
}

export default Privacy;

import { FC } from "react";
import Head from "next/head";

interface MetaData {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}

const Seo: FC<MetaData> = ({
  pageTitle = "Reno.",
  pageDescription = "Renoのオフィシャルサイトです。",
  pagePath = "https://reno.pages.dev", // デフォルトのURL
  pageImg = "",
  pageImgWidth = 1280,
  pageImgHeight = 640,
}) => {
  const title = pageTitle ? `${pageTitle} | Reno.` : "Reno.";
  const description = pageDescription;
  const url = pagePath;
  const imgUrl = pageImg;
  const imgWidth = pageImgWidth;
  const imgHeight = pageImgHeight;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Reno." />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:alt" content="Reno." />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@reno_ma1n" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Seo;

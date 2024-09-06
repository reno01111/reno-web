import Link from 'next/link';
import Image from 'next/image';
import Seo from '../_seo';

export function index() {
  return (
    <div>
      <Seo
        pageTitle={"Blog"}
        pageDescription={"このページはブログページです。"}
        pageImg={"https://reno.pages.dev/images/site-ogp.jpg"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <h1 className="text-3xl font-semibold text-center m-10">
        Blog
        <small className="text-sm opacity-80">ブログ</small>
      </h1>
    </div>
  );
}

export default index;

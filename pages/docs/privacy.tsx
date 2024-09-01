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
      <div className="container m-auto h-screen w-100 flex items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-center m-10">
            Privacy Policy
          </h1>
          <div className="m-2 content mx-auto my-6 flex w-11/12 flex-col gap-y-2 sm:w-4/5 lg:w-2/3">
            <p>
              このサイトでは利用状況を分析するために Google アナリティクス
              を使用しています。Google アナリティクス は Cookie
              を使用して当サイトへのアクセス情報を Google に送信しています。
            </p>
            <p>
              取得したデータは本サイトの改善に役立てることのみに使用するとし、個人の特定やその他個人の不利益に関わることはいたしません。
              規約の詳細に関しましては、
              <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/">
                「Googleアナリティクス利用規約」
              </Link>
              をご覧ください。
            </p>
            <p>
              Google アナリティクス でデータが収集、処理される仕組みについては
              <Link href="https://policies.google.com/technologies/partner-sites">
                「Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用」
              </Link>
              をご覧ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

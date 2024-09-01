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
      <div className="container m-auto w-100 flex items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-center m-10">
            Privacy Policy
            <small className="text-sm opacity-80">プライバシーポリシー</small>
          </h1>
          <div className="m-2 content mx-auto my-6 flex w-11/12 flex-col gap-y-2 sm:w-4/5 lg:w-2/3">
            <div className="mb-5">
              <h1 className="text-lg font-bold">はじめに</h1>
              <p>
                はじめに
                この利用規約は、Reno.（以下、「当サイト」といいます。）が公開するサイトの利用条件を定めるものです。
                <br />
                ユーザーの皆様は本利用規約に同意の上、本サービスをご利用ください。
              </p>
            </div>
            <div className="mb-5">
              <h1 className="text-lg font-bold">個人情報の利用目的</h1>
              <p>
                当ブログでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
                取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
              </p>
            </div>
            <div className="mb-5">
              <h1 className="text-lg font-bold">広告について</h1>
              <p>
                当ブログでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
                <br />
                クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
              </p>
              <br />
              <p>
                Cookieを無効にする方法やGoogleアドセンスに関する詳細は
                <Link
                  href="https://policies.google.com/technologies/ads?gl=jp"
                  className="text-blue-500 underline"
                >
                  「広告 – ポリシーと規約 – Google」
                </Link>
                をご確認ください。
              </p>
            </div>
            <div className="mb-5">
              <h1 className="text-lg font-bold">アクセス解析ツールについて</h1>
              <p>
                当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。
                <br />
                トラフィックデータは匿名で収集されており、個人を特定するものではありません。
              </p>
            </div>
            <div className="mt-20 mb-5">
              <h1 className="text-lg font-bold">免責事項</h1>
              <p>
                当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
                <br />
                また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
                <br />
                当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
              </p>
            </div>
            <div className="mt-20 mb-5">
              <h1 className="text-lg font-bold">お問い合わせについて</h1>
              <p>
                本ポリシー又はサイトに関するお問い合わせは，下記の窓口までお願いいたします。
                <br />
                <Link href="/contact" className="text-blue-500 underline">
                  お問い合わせフォーム
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

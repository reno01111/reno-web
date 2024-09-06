import Link from "next/link";
import Image from "next/image";

import Seo from "../_seo";
import { useRef } from "react";

export function Index() {
  return (
    <div>
      <Seo
        pageTitle={"Contact"}
        pageDescription={"このページはお問い合わせページです。"}
        pageImg={"https://reno.pages.dev/images/site-ogp.jpg"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <h1 className="text-3xl font-semibold text-center m-10">
        Contact Form
        <small className="text-sm opacity-80">お問い合わせ</small>
      </h1>
      <form onSubmit={handleSubmitd}>
        <div className="Form container">
          <div className="Form-Item">
            <p className="Form-Item-Label">
              <span className="Form-Item-Label-Required">必須</span>氏名
            </p>
            <input
              type="text"
              className="Form-Item-Input"
              placeholder="例）山田太郎"
              required
              ref={nameRef}
            />
          </div>
          <div className="Form-Item">
            <p className="Form-Item-Label">
              <span className="Form-Item-Label-Required">必須</span>
              メールアドレス
            </p>
            <input
              type="email"
              className="Form-Item-Input"
              placeholder="例）example@gmail.com"
              required
              ref={emailRef}
            />
          </div>
          <div className="Form-Item">
            <p className="Form-Item-Label">
              <span className="Form-Item-Label-Required">必須</span>
              お問い合わせ内容
            </p>
            <input
              type="text"
              className="Form-Item-Input"
              placeholder="例）サイトのバグ報告"
              required
              ref={contentsRef}
            />
          </div>
          <div className="Form-Item">
            <p className="Form-Item-Label isMsg">
              <span className="Form-Item-Label-Required">必須</span>
              お問い合わせ本文
            </p>
            <textarea
              className="Form-Item-Textarea"
              placeholder="例）本文をここに記載本文をここに記載"
              id="freeText"
              required
              ref={freeTextRef}
            ></textarea>
          </div>
          <button type="submit" className="Form-Btn">
            メール送信
          </button>
        </div>
      </form>
    </div>
  );
}

export default Index;

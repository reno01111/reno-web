import Link from "next/link";
import React, { useEffect } from "react";

function _footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerLink">
          <div>
            <ul>
              <p className="font-bold text-xl pb-2">Home.</p>
              <li>
                <Link href="/">ホーム</Link>
              </li>
              <li>
                <Link href="/blog">ブログ</Link>
              </li>
              <li>
                <Link href="/portfolio">ポートフォリオ</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p className="font-bold text-xl pb-2">Site Related.</p>
              <li>
                <Link href="/docs/privacy">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="/contact">お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Reno. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default _footer;

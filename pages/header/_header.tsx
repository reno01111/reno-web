import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_JP } from "next/font/google";

const notoSerifJP = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
});

function Header() {
  return (
    <div className={notoSerifJP.className}>
      <nav className="header_nav">
        <div className="header_nav_left">
          <div>
            <Link href="/">RENOo.</Link>
          </div>
          <ul className="header_link">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="header_nav_right">
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;

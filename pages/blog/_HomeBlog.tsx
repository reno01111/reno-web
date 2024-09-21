import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import RenoIcon from "@/public/image/reno-icon.png";

export function _HomeBlog() {
  return (
    <div>
      <div className="grid content-center justify-center py-32 md:py-20 lg:h-screen">
        <h1 className="text-4xl font-semibold text-center pb-10">
          Profile
          <small className="text-sm opacity-80">プロフィール</small>
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="grid items-center px-2">
            <Image
              src={RenoIcon}
              alt="ALTが入ります"
              className="bg-gray-300 rounded-full mx-auto"
            ></Image>
          </div>
          <div className="">
            <div className="p-10">
              <h1 className="font-semibold text-2xl pb-3">SNS</h1>
              <Link
                href="https://x.com/reno_ma1n"
                className="text-blue-400 underline"
                target="_blang"
              >
                Twitter(X) : @reno_ma1n
              </Link>
            </div>
            <div className="p-10">
              <h1 className="font-semibold text-2xl pb-3">
                Available Technology
              </h1>
              <ul className="list-disc pl-5">
                <li className="text-purple-500">HTML / CSS</li>
                <li className="text-purple-500">JavaScript</li>
                <li className="text-purple-500">Riact</li>
                <li className="text-purple-500">Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _HomeBlog;

import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between py-2 mt-20">
      <img className="cursor-pointer" src={assets.logo} alt="" width={150} />
      <p className="flex-1 border-l border-gray-500 pl-4 text-sm text-gray-600 max-sm:hidden ml-6 pb-0">
        All right reserved. Copyright @beereshbc.dev
      </p>
      <div className="flex gap-4 mb-2">
        <a href="https://www.instagram.com/beera____/">
          <img src={assets.instagram_icon} alt="" width={35} />
        </a>
        <a href="https://x.com/BBchatrad?s=08">
          <img src={assets.twitter_icon} alt="" width={35} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

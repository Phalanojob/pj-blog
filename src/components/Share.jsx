"use client";
import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import TikTok from "../assets/TikTok";
import X from "../assets/X";
import React from "react";

const Share = () => {
  return (
    <div className="pt-[30px] flex justify-start items-center gap-[12px]">
      <div
        onClick={() =>
          window.open(
            "https://www.facebook.com/sharer/sharer.php?u=" +
              encodeURIComponent(window.location.href),
            "_blank",
          )
        }
      >
        <Facebook />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://www.instagram.com/share?url=" +
              encodeURIComponent(window.location.href),
            "_blank",
          )
        }
      >
        <Instagram />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://twitter.com/intent/tweet?url=" +
              encodeURIComponent(window.location.href),
            "_blank",
          )
        }
      >
        <X />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://www.tiktok.com/share?url=" +
              encodeURIComponent(window.location.href),
            "_blank",
          )
        }
      >
        <TikTok />
      </div>
      <h1 className="text-[17px] text-[#000000] leading-[16.6px]">Share</h1>
    </div>
  );
};

export default Share;

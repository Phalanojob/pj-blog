import React from "react";
import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import TikTok from "../assets/TikTok";
import X from "../assets/X";
import PJLogoIcon from "../assets/PJLogoIcon";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div
      style={{
        borderTop: "0.753px solid #E6E5FF",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 16.15%, rgba(53, 100, 168, 0.10) 100%)",
      }}
    >
      <div className="py-16 ">
        {/* footer */}
        <div className="md:flex md:justify-between md:items-center mx-[10%]">
          {/* about company */}
          <div className="">
            <div className="">
              <Link to={"https://dev.d3t64823eoaxhb.amplifyapp.com/"} className="hover:cursor-pointer">
                <PJLogoIcon  />
              </Link>
            </div>
            <div className="pt-[24px]">
              <p className="text-[#497696] text-[14px] leading-[22.px] w-[300px]">
                Access job listings, apply on the fly, and stay updated on the
                go. Your next career move is just a tap away.
              </p>
            </div>
            <div className="pt-[30px] flex justify-start items-center gap-[12px]">
              <Link to={"https://m.facebook.com/phalanojobnepal"}>
                <Facebook />
              </Link>
              <Link to={"https://www.instagram.com/phalanojob"}>
                <Instagram />
              </Link>
              <Link to={"https://twitter.com/phalanojob"}>
                <X />
              </Link>
              <Link to={"https://www.tiktok.com/@phalanojob"}>
                <TikTok />
              </Link>
            </div>
          </div>

          {/* menu */}
          <div className="mt-6 md:mt-0">
            <div className="text-[#083A5E] leading-[16px]">
              <h1 className="text-[18px] font-bold leading-[22px]">Company</h1>
            </div>
            <div className="text-[14px] pt-[19px] text-[#497696]">
              <ul>
                <li className="pt-[11px]">
                  <Link
                    to={"https://dev.d3t64823eoaxhb.amplifyapp.com/about-us"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    About Us
                  </Link>
                </li>
                {/* <li className="pt-[11px]">
                  <Link to={"/careers"}>Careers</Link>
                </li> */}
                <li className="pt-[11px]">
                  <Link
                    to={"https://dev.d3t64823eoaxhb.amplifyapp.com/privacy-policy"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li className="pt-[11px]">
                  <Link
                    to={"https://dev.d3t64823eoaxhb.amplifyapp.com/termsandservice"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Terms & service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="text-[#083A5E]  leading-[16px]">
              <h1 className="text-[18px] font-bold leading-[22.px]">
                For Job Seekers
              </h1>
            </div>
            <div className="text-[14px] pt-[19px] text-[#497696]">
              <ul>
                <li className="pt-[11px]">
                  <Link
                    to={"https://dev.d3t64823eoaxhb.amplifyapp.com/search"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Overview
                  </Link>
                </li>
                <li className="pt-[11px]">
                  <Link
                    to={"/search"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Browse Jobs
                  </Link>
                </li>
                <li className="pt-[11px]">
                  <Link
                    to={"/"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Blogs
                  </Link>
                </li>
                {/* <li className="pt-[11px]">
                  <Link to={"/fraud-alert"}>Fraud alert</Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="text-[#083A5E]  leading-[16px]">
              <h1 className="text-[18px] font-bold leading-[22px]">
                For Employers
              </h1>
            </div>
            <div className="text-[14px] pt-[19px] text-[#497696]">
              <ul>
                <li className="pt-[11px]">
                  <Link
                    to={"https://dev.d3t64823eoaxhb.amplifyapp.com/"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Overview
                  </Link>
                </li>
                <li className="pt-[11px]">
                  <Link
                    to={"https://dev.d3t64823eoaxhb.amplifyapp.com/employers/terms-of-service"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Employer Terms of service
                  </Link>
                </li>
                {/* <li className="pt-[11px]">
                  <Link to={"/employers/faq"}>Employer FAQ’s</Link>
                </li> */}
                <li className="pt-[11px]">
                  <Link
                    to={"https://dev.d3t64823eoaxhb.amplifyapp.com/pricing"}
                    className=" hover:text-primary hover:font-medium"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          borderTop: "1.016px solid #D2D9FF",
        }}
      >
        <div className="flex justify-center flex-wrap items-center py-4 ">
          <p className="text-[#497696] font-Manrope text-[12px] font-normal leading-tight">
            © 2024 Phalano Job Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/homepage", isLink: true },
    { name: "Product", path: "#", isLink: false },
    { name: "Dashboard", path: "#", isLink: false },
    { name: "Login", path: "#", isLink: false },
    { name: "Sign Up", path: "#", isLink: false },
    { name: "Asset Store", path: "#", isLink: false, highlight: true },
  ];

  return (
    <footer className="flex flex-col w-full items-center justify-center gap-[25px] px-0 py-24 bg-zinc-950">
      <div className="relative w-full max-w-[1156px] flex justify-between items-center">
        <div className="bg-[linear-gradient(161deg,rgba(0,200,255,0.62)_0%,rgba(138,56,245,0.62)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Outfit',Helvetica] font-bold text-transparent text-[29px] tracking-[0] leading-normal">
          {""}
        </div>

        <div className="font-body-paragraph font-[number:var(--body-paragraph-font-weight)] text-[#ffffff80] text-[length:var(--body-paragraph-font-size)] tracking-[var(--body-paragraph-letter-spacing)] leading-[var(--body-paragraph-line-height)] [font-style:var(--body-paragraph-font-style)]">
          © 2025 All rights&nbsp;&nbsp;reserved
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div className="w-[22px] left-[5px] bg-[#ffffffa6] absolute h-8 top-0 rounded-[10px]" />
            <InstagramIcon className="absolute w-8 h-8 top-0 left-0 text-white" />
          </div>

          <div className="relative w-8 h-8">
            <div className="w-[21px] left-[9px] bg-[#d9d9d9a6] absolute h-8 top-0 rounded-[10px]" />
            <FacebookIcon className="absolute w-8 h-8 top-0 left-0 text-white" />
          </div>

          <div className="relative w-8 h-8">
            <div className="w-7 left-[3px] bg-[#d9d9d9a6] absolute h-8 top-0 rounded-[10px]" />
            <YoutubeIcon className="absolute w-8 h-8 top-0 left-0 text-white" />
          </div>
        </div>
      </div>

      <Separator className="w-full max-w-[1152px] bg-zinc-800" />

      <nav className="flex items-center gap-[17px] relative">
        {navLinks.map((link, index) =>
          React.createElement(
            link.isLink ? Link : "div",
            {
              key: index,
              className: `relative h-[25px] mt-[-0.88px] font-body-paragraph font-[number:var(--body-paragraph-font-weight)] ${
                link.highlight
                  ? "text-[#d9d9d9a6] rotate-[-0.15deg]"
                  : "text-[#ffffff99]"
              } text-[length:var(--body-paragraph-font-size)] tracking-[var(--body-paragraph-letter-spacing)] leading-[var(--body-paragraph-line-height)] [font-style:var(--body-paragraph-font-style)]`,
              ...(link.isLink ? { to: link.path } : {}),
            },
            link.name,
          ),
        )}
      </nav>
    </footer>
  );
};

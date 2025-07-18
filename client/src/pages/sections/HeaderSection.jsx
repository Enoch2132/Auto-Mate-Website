import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function HeaderSection() {
  // Navigation menu items data
  const navItems = [
    { label: "Home", path: "/homepage" },
    { label: "Product", path: "/product" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Asset Store", path: "/asset-store" },
    { label: "Log In", path: "/login" },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-0.5 fixed top-5 left-0 right-0 mx-auto max-w-[1400px] h-[70px] bg-gray-800/80 border border-solid border-gray-600 backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] z-10">
      <Link to="/homepage" className="flex items-center">
        <img
          className="w-[76px] h-[62px]"
          alt="Auto mate logo"
          src="/figmaAssets/auto-mate-logo-background-2.png"
        />
      </Link>

      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex items-center gap-[5px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link to={item.path} className="opacity-50 inline-flex items-center justify-center px-[21px] py-4">
                  <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base">
                    {item.label}
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <Button className="h-11 px-[21px] py-4 rounded-lg bg-[linear-gradient(127deg,rgba(138,56,245,1)_0%,rgba(0,246,201,1)_100%)] hover:bg-[linear-gradient(127deg,rgba(138,56,245,0.9)_0%,rgba(0,246,201,0.9)_100%)]">
              <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base">
                Sign Up
              </span>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
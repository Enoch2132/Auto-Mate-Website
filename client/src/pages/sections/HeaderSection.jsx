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
    <header className="flex items-center justify-between px-6 py-3 fixed top-4 left-4 right-4 mx-auto max-w-6xl h-[60px] bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-full z-50">
      <Link to="/homepage" className="flex items-center gap-2">
        <img 
          src="/figmaAssets/auto-mate-logo-background-2.png"
          alt="Auto-Mate Logo"
          className="w-8 h-8"
        />
        <span className="text-white font-bold text-lg">Auto-Mate</span>
      </Link>

      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex items-center gap-[5px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link to={item.path} className="text-gray-300 hover:text-white transition-colors inline-flex items-center justify-center px-4 py-2 text-sm font-medium">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium text-sm">
              Sign Up
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
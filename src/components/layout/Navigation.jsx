"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-darker-navy border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-semibold text-brand-blue">
            Portfolio
          </Link>

          <div className="flex items-center space-x-8">
            {["Home", "About", "Projects", "Education"].map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className={`${
                    pathname === href
                      ? "text-brand-blue"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  } text-sm font-medium transition-colors`}
                >
                  {item}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

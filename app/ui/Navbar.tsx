'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={clsx(
                      "text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium", 
                      pathname === "/" && "bg-gray-900 text-white"
                  )}
                >
                  Home
                </Link>

                <Link 
                  href="/courses" 
                  className={clsx(
                      "text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium", 
                      pathname === "/courses" && "bg-gray-900 text-white"
                  )}
                >
                  Courses
                </Link>
                <Link
                href={"/add-course"}
                  className={clsx(
                    "text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium", 
                    pathname === "/courses" && "bg-gray-900 text-white"
                )}
                >
                  Add Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

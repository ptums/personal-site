"use client";
import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { useSelectedLayoutSegments } from "next/navigation";
import classNames from "classnames";
import {
  MenuIcon as HeroMenuIcon,
  XIcon as HeroXIcon,
} from "@heroicons/react/outline";
import { navigation } from "utils/constants";
import { Navigation } from "types/Navigation";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-end lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50">
          <div className="absolute inset-y-0 left-0 w-full max-w-md">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="h-full bg-white shadow-lg"
            >
              <div className="p-2 border-b border-gray-200 flex justify-between items-center">
                <Image
                  src="/images/badge.svg"
                  alt="Tumulty Web Services"
                  width={62}
                  height={62}
                />
                <XMarkIcon
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <div className="px-2 py-3 space-y-1">
                {navigation
                  .filter((l) => l?.client === true)
                  .map((link: Navigation) => (
                    <Link
                      className={classNames(
                        "block px-3 py-2 text-base font-medium rounded-md hover:text-gray-900 hover:bg-gray-50 text-emerald-800",
                        {
                          underline:
                            link?.href.includes(selectedLayoutSegments) ||
                            (link?.href === "/" &&
                              selectedLayoutSegments === undefined),
                        }
                      )}
                      onClick={toggleMenu}
                      href={link?.href}
                      key={link?.name}
                    >
                      {link?.name}
                    </Link>
                  ))}
                {navigation
                  .filter((l) => l?.client !== true)
                  .map((link: Navigation) => (
                    <a
                      className={classNames(
                        "block px-3 py-2 text-base font-medium rounded-md hover:text-gray-900 hover:bg-gray-50 text-emerald-800",
                        {
                          underline:
                            link?.href.includes(selectedLayoutSegments) ||
                            (link?.href === "/" &&
                              selectedLayoutSegments === undefined),
                        }
                      )}
                      onClick={toggleMenu}
                      href={link?.href}
                      key={link?.name}
                    >
                      {link?.name}
                    </a>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MobileMenu;

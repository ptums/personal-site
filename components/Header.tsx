"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { navigation } from "utils/constants";
import { Navigation } from "types/Navigation";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full flex flex-row justify-between h-16 border-b">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/badge.svg"
            alt="Tumulty Web Services"
            width={62}
            height={62}
          />
        </Link>
        <Link href="mailto:ptumulty923@gmail.com">
          <span className="text-green-900 hover:underline">
            ptumulty923@gmail.com
          </span>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <ul
        className="hidden lg:flex lg:justify-center lg:text-center lg:my-5 lg:mx-4 lg:items-center"
        style={{ minWidth: 500 }}
      >
        {navigation.map((link: Navigation) => (
          <li key={link?.name} className={link?.listClass}>
            <Link href={link?.href} className={link?.linkClass}>
              {link?.name}
            </Link>
          </li>
        ))}
      </ul>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Peter Tumulty</span>
              <Image
                src="/images/badge.svg"
                alt="Tumulty Web Services"
                width={62}
                height={62}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <ul
                className="hidden lg:flex lg:justify-center lg:text-center lg:my-5 lg:mx-0 lg:items-center"
                style={{ minWidth: 500 }}
              >
                {navigation.map((link: Navigation) => (
                  <li key={link?.name} className={link?.listClass}>
                    <Link href={link?.href} className={link?.linkClass}>
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;

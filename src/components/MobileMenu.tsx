import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavLink {
  name: string;
  href: string;
  external: boolean;
}

const navigation: NavLink[] = [
  { name: "Home", href: "/", external: false },
  { name: "Blog", href: "/blog", external: false },
  { name: "Resume", href: "/images/PFT-Resume-2026.pdf", external: true },
];

interface Props {
  pathname: string;
}

const MobileMenu = ({ pathname }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex items-center justify-end lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50">
            <div className="absolute inset-y-0 left-0 w-full max-w-md">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.35, ease: "linear" }}
                className="h-full bg-white shadow-lg"
              >
                <div className="p-2 border-b border-gray-200 flex justify-between items-center">
                  <img
                    src="/images/badge.svg"
                    alt="Tumulty Web Services"
                    width={62}
                    height={62}
                  />
                  <XMarkIcon
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 cursor-pointer mr-3"
                    aria-hidden="true"
                  />
                </div>
                <div className="px-2 py-3 space-y-1">
                  {navigation.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-md hover:text-gray-900 hover:bg-gray-50 text-emerald-800 ${
                        isActive(link.href) ? "underline" : ""
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;

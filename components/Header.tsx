"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import classNames from "classnames";
import { EMAIL, navigation } from "utils/constants";
import MobileMenu from "components/MobileMenu";
import { Navigation } from "types/Navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

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
        <Link href={`mailto:${EMAIL}`}>
          <span className="text-emerald-800 hover:underline">{EMAIL}</span>
        </Link>
      </div>
      <ul
        className="hidden lg:flex lg:justify-center lg:text-center lg:my-5 lg:mx-4 lg:items-center"
        style={{ minWidth: 500 }}
      >
        {navigation.map((link: Navigation) => (
          <li key={link?.name} className="my-0 mx-1">
            {link?.client === true ? (
              <Link
                href={link?.href}
                className={classNames("p-2 text-emerald-800", {
                  underline:
                    link?.href.includes(selectedLayoutSegments) ||
                    (link?.href === "/" &&
                      selectedLayoutSegments === undefined),
                })}
              >
                {link?.name}
              </Link>
            ) : (
              <a
                href={link?.href}
                className={classNames("p-2 text-emerald-800", {
                  underline: link?.href.includes(selectedLayoutSegments),
                })}
              >
                {link?.name}
              </a>
            )}
          </li>
        ))}
      </ul>
      <MobileMenu />
    </header>
  );
};

export default Header;

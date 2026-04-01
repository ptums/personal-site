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
    <header className="w-full flex flex-row items-center justify-between h-16 border-b">
      <div className="flex items-center min-w-0 shrink">
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
      <ul className="hidden lg:flex lg:items-center lg:justify-end lg:ml-auto lg:my-0 lg:pl-4 shrink-0">
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

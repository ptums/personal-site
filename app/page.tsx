import Image from "next/image";
import PageAnimationLayout from "components/PageAnimationLayout";
import { Link } from "types/Link";
import { CONTACTS, RECENT_STACK } from "utils/constants";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Introduction = dynamic(() => import("components/Introduction"));

export const runtime = "experimental-edge";

const Home = () => (
  <div
    className="flex flex-col sm:flex-row justify-between mx-auto w-full max-w-4xl	 my-2 sm:my-20 items-start"
    style={{ minHeight: "80vh" }}
  >
    <Suspense fallback={<></>}>
      <div className="sm:w-2/5 my-3 sm:mb-0 sm:mt-1">
        <PageAnimationLayout duration={1.2} delay={0}>
          <Image
            src="/images/peter-2023.png"
            alt="Peter Tumulty"
            width={512}
            height={512}
            quality={100}
            className="shadow-lg rounded-sm"
          />
        </PageAnimationLayout>
      </div>
      <div className="sm:ml-8 sm:w-3/5">
        <PageAnimationLayout duration={1.2} delay={0.5}>
          <Introduction />
        </PageAnimationLayout>
        <PageAnimationLayout duration={1.2} delay={1}>
          <div className="bg-white border rounded p-4 mb-8 shadow-sm">
            <p className="font-semibold text-lg text-emerald-800">
              Connect with me
            </p>
            <ul className="mt-2 flex flex-col sm:flex-row">
              {CONTACTS.map((contact: Link) => (
                <li key={contact?.id}>
                  <a
                    className="text-emerald-800 mr-4 text-sm underline my-2 block sm:inline sm:my-0"
                    href={contact?.slug}
                    target="_blank"
                  >
                    {contact?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border rounded p-4 shadow-sm">
            <p className="font-semibold text-lg text-emerald-800 mb-2">
              A few technologies I&apos;ve been working with recently
            </p>
            <div className="flex flex-col sm:flex-row">
              <ul className="mt-2 flex flex-col w-full sm:w-52">
                {RECENT_STACK.slice(0, 4).map((stack: string) => (
                  <li
                    key={stack}
                    className="text-emerald-800 mr-4 text-sm mb-2"
                  >
                    {stack}
                  </li>
                ))}
              </ul>
              <ul className="mt-2 flex flex-col">
                {RECENT_STACK.slice(4, 8).map((stack: string) => (
                  <li
                    key={stack}
                    className="text-emerald-800 mr-4 text-sm mb-2"
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageAnimationLayout>
      </div>
    </Suspense>
  </div>
);

export default Home;

import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import ContactForm from "components/ContactForm";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("components/Loading"));

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "Free Advice | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

const Page = () => (
  <div style={{ minHeight: "80vh" }}>
    <div className="text-center py-6">
      <PageTitle title="Free Advice" />
    </div>
    <div className="mx-4 sm:mx-auto w-full max-w-3xl sm:mt-4">
      <div className="space-y-6 sm:space-y-5">
        <div>
          <h3 className="font-semibold text-lg text-emerald-800">
            Ask me anything!
          </h3>
          <p className="mt-1 text-base text-emerald-800 font-normal">
            Need help with software development? Whether you have a simple
            question, need a coding mentor, or could use another hand on a
            project, I&apos;m here for you. Let&apos;s chat! I offer a free
            45-minute session to see how I can assist you.
          </p>
        </div>
        <Suspense fallback={<Loading />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  </div>
);

export default Page;

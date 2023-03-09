import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import ContactForm from "components/ContactForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Free Advice | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

const Page = () => (
  <div>
    <div className="text-center py-6">
      <PageTitle title="Free Advice" />
    </div>
    <div className="mx-4 sm:mx-auto w-full max-w-3xl">
      <Suspense fallback={<></>}>
        <div className="mb-12">
          <ContactForm />
        </div>
      </Suspense>
    </div>
  </div>
);

export default Page;

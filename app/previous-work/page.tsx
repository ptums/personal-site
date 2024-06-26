import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import { Suspense } from "react";
import SingleProject from "components/SingleProject";
import dynamic from "next/dynamic";
import { PreviousWork } from "types";
import previousWork from "db/previousWork.json";

const Loading = dynamic(() => import("components/Loading"));

export const metadata: Metadata = {
  title: "Previous Work | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

const Page = async () => {
  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Previous Work" />
      </div>
      <div className="flex flex-col mx-auto lg:mx-0 lg:flex-row lg:flex-wrap w-full justify-center items-center max-w-screen-lg">
        <Suspense fallback={<Loading />}>
          {previousWork
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((project: PreviousWork) => (
              <SingleProject project={project} key={project.label} />
            ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Page;

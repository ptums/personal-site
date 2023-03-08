import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import SingleProject from "components/SingleProject";
import { PROJECTS } from "utils/constants";

export const metadata: Metadata = {
  title: "Previous Work | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

const Page = () => (
  <div>
    <div className="text-center py-6">
      <PageTitle title="Previous Work" />
    </div>
    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center max-w-screen-lg  border">
      {PROJECTS.map((project) => (
        <SingleProject {...project} key={project.id} />
      ))}
    </div>
  </div>
);

export default Page;

import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import SingleProject from "components/SingleProject";
import { fetchAPI } from "utils/api";
import { IPreviousWorkFields } from "types/contentful";

export const metadata: Metadata = {
  title: "Previous Work | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

async function getData() {
  const previousWorkQuery = `query {
    previousWorkCollection(order:order_ASC) {
      items {
        label
        slug
        video
        stack
      }
    }
  }`;

  const previousWork = await fetchAPI(previousWorkQuery, {});

  return previousWork?.data?.previousWorkCollection?.items;
}

const Page = async () => {
  const data: IPreviousWorkFields[] = await getData();

  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Previous Work" />
      </div>
      <div className="flex flex-col mx-auto lg:mx-0 lg:flex-row lg:flex-wrap w-full justify-center max-w-screen-lg">
        {data.map((project: IPreviousWorkFields, index: number) => (
          <SingleProject project={project} index={index} key={project.label} />
        ))}
      </div>
    </div>
  );
};

export default Page;

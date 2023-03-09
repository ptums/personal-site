import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import { fetchAPI } from "utils/api";
import { IPostFields } from "types/contentful";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const SinglePost = dynamic(() => import("components/SinglePost"));

export const metadata: Metadata = {
  title: "Blog | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

async function getData() {
  const postsQuery = `query {
    postCollection {
      items {
        tagLine
        title
        description
        date
      }
    }
  }`;

  const posts = await fetchAPI(postsQuery, {});

  return posts?.data?.postCollection?.items;
}

const Page = async () => {
  const data: IPostFields[] = await getData();

  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Blog" />
      </div>
      <div className="flex flex-col mx-auto w-full justify-center max-w-screen-md">
        <Suspense fallback={<></>}>
          {data
            ?.sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((post: IPostFields, index: number) => (
              <SinglePost post={post} index={index} key={post?.title} />
            ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Page;

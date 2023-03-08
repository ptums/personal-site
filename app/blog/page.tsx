import { Metadata } from "next";
import Link from "next/link";
import PageTitle from "components/PageTitle";
import { fetchAPI } from "utils/api";
import { IPostFields } from "types/contentful";

export const metadata: Metadata = {
  title: "Previous Work | Peter Tumulty Web Developer",
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

const slugify = (title: string) =>
  `/posts/${title.replaceAll(/ /g, "-").toLowerCase()}`;

const Page = async () => {
  const data: IPostFields[] = await getData();

  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Blog" />
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center max-w-screen-lg border">
        <ul className="mx-auto max-w-4xl flex flew-row flex-wrap pt-6">
          {data
            ?.sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((post: IPostFields) => (
              <li
                key={post?.title}
                className="bg-white rounded shadow mb-6 p-4 w-full lg:w-2/5 mx-auto cursor-pointer h-56 flex flex-col justify-center text-left"
              >
                <Link href={slugify(post?.title)}>
                  <p className="text-md text-emerald-600 font-semibold mb-1">
                    {post?.title}
                  </p>
                  <p className="text-sm text-gray-400 font-semibold mb-4">
                    {post?.tagLine}
                  </p>
                  <p className="text-sm text-emerald-800 font-normal">
                    {post?.description}
                  </p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;

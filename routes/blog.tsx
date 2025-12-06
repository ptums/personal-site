import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import PageTitle from "../components/PageTitle";
import { fetchAPI } from "../utils/api";
import { Posts } from "../types/Posts";
import SinglePost from "../components/SinglePost";
import Loading from "../components/Loading";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  loader: async () => {
    const postsQuery = `query {
      postCollection {
        items {
          sys {
            id
          }
          tagLine
          title
          description
          date
        }
      }
    }`;

    const posts = await fetchAPI(postsQuery, {});
    return posts?.data?.postCollection?.items || [];
  },
  meta: () => [
    {
      title: "Blog | Peter Tumulty Senior Software Engineer",
    },
    {
      name: "description",
      content:
        "I provide a variety of different digital services, so you can focus on your customers, clients, and business operations.",
    },
  ],
});

export default BlogPage;

function BlogPage() {
  const data: Posts[] = Route.useLoaderData();

  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Blog" />
      </div>
      <div className="flex flex-col mx-auto w-full justify-center max-w-screen-md">
        <Suspense fallback={<Loading />}>
          {data
            ?.sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((post: Posts, index: number) => (
              <SinglePost post={post} index={index} key={post?.title} />
            ))}
        </Suspense>
      </div>
    </div>
  );
}

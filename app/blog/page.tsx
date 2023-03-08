import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import { fetchAPI } from "utils/api";

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

const Page = async () => {
  const data = await getData();
  console.log("data", data);
  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Blog" />
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center max-w-screen-lg border">
        {data?.map((post) => (
          <li key={post?.title}>{post?.title}</li>
        ))}
      </div>
    </div>
  );
};

export default Page;

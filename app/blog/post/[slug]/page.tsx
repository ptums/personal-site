import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "utils/api";
import { slugify } from "utils/functions";

async function getPostId(title: string) {
  const postsIdQuery = `query {
    postCollection {
      items {
        sys {
          id
        }
        title
      }
    }
  }`;

  const postsByTitle = await fetchAPI(postsIdQuery, {});

  const post = postsByTitle?.data?.postCollection.items.filter((post) =>
    slugify(post?.title).includes(title)
  );

  if (post.length > 0) {
    return post[0]?.sys?.id;
  }
}

async function findPostById(id: string) {
  const postQuery = (id) => `query postEntryQuery {
  post(id: "${id}") {
    sys {
      id
    }
    title
    tagLine
    body
    date
    description
  }
}`;

  const post = await fetchAPI(postQuery(id), {});

  return post?.data?.post;
}

const Page = async ({ params }) => {
  const postId = await getPostId(params?.slug);
  const post = await findPostById(postId);

  return (
    <>
      <div className="post-content">
        <ReactMarkdown>{post?.body}</ReactMarkdown>
      </div>
    </>
  );
};

export default Page;

import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../utils/api";
import { slugify } from "../utils/functions";
import { IPostFields } from "@/types";

type LoaderParams = { params: { slug: string } };

// Fix: createFileRoute expects an object with a `loader` and `component` property, but the correct usage is to export the loader and component separately, not as an object.
// Also, the loader should be exported as `loader` and the component as default or named export.

export const loader = async ({
  params,
}: LoaderParams): Promise<IPostFields> => {
  const postId = await getPostId(params.slug);
  const post = await findPostById(postId);
  return post;
};

export default BlogPostPage;

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
  const postQuery = (id: string) => `query postEntryQuery {
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

function BlogPostPage() {
  const post = loader(Route.id);

  if (post) {
    return (
      <>
        <div className="post-content">
          <ReactMarkdown>{post?.body}</ReactMarkdown>
        </div>
      </>
    );
  }
}

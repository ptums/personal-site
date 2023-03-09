import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IReviewsFields } from "types/contentful";
import PageAnimationLayout from "./PageAnimationLayout";

const SingleReview = ({
  review,
  index,
}: {
  review: IReviewsFields;
  index: number;
}) => (
  <PageAnimationLayout duration={1.2} delay={index * 0.5}>
    {/* <Link
      className="bg-white rounded shadow mb-6 p-4 cursor-pointer h-52 flex flex-col justify-center text-left"
      href={slugify(post?.title)}
    >
      <p className="text-md text-emerald-600 font-semibold mb-1">
        {post?.title}
      </p>
      <p className="text-sm text-gray-400 font-semibold mb-4">
        {post?.tagLine}
      </p>
      <p className="text-sm text-emerald-800 font-normal">
        {post?.description}
      </p>
    </Link> */}
    <div className="flex flew-row justify-center w-full h-24 my-12">
      <div className="bg-green-600 w-4" />
      <span className="text-base text-emerald-900">
        {documentToReactComponents((review?.statement as any)?.json)}
      </span>
    </div>
  </PageAnimationLayout>
);

export default SingleReview;

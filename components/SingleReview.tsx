import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { playFairDisplay } from "app/font";
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
    <div className="flex flex-col mb-12 mx-4 md:mx-0">
      <div className="flex flew-row w-full">
        <blockquote className="text-base text-emerald-800 font-normal border-l-4 pl-4 border-emerald-500">
          {documentToReactComponents((review?.statement as any)?.json)}
        </blockquote>
      </div>
      <p
        className={`font-semibold text-emerald-800 mt-6 text-lg ${playFairDisplay.className}`}
      >
        - {review?.name}
        <span className="ml-2 text-xs">{review?.company}</span>
      </p>
    </div>
  </PageAnimationLayout>
);

export default SingleReview;

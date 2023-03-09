import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IReviewsFields } from "types/contentful";
import PageAnimationLayout from "./PageAnimationLayout";
import { Playfair_Display } from "next/font/google";

const playFairDisplay = Playfair_Display({
  weight: ["800", "400", "500"],
  display: "swap",
  subsets: ["latin"],
});

const SingleReview = ({
  review,
  index,
}: {
  review: IReviewsFields;
  index: number;
}) => (
  <PageAnimationLayout duration={1.2} delay={index * 0.5}>
    <div className="flex flex-col mb-12 mx-4 md:mx-0">
      <div className="flex flew-row">
        <div className="bg-emerald-500 w-5 sm:w-4 mr-4" />
        <blockquote className="text-base text-emerald-800 font-normal">
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

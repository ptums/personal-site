import { playFairDisplay } from "app/font";
import PageAnimationLayout from "./PageAnimationLayout";
import { Reviews } from "types";

const SingleReview = ({
  review,
  index,
}: {
  review: Reviews;
  index: number;
}) => (
  <PageAnimationLayout duration={1.2} delay={index * 0.5}>
    <div className="flex flex-col mb-12 mx-4 md:mx-0">
      <div className="flex flew-row w-full">
        <blockquote className="text-base text-emerald-800 font-normal border-l-4 pl-4 border-emerald-500">
          {review?.statement}
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

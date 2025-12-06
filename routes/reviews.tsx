import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import PageTitle from "../components/PageTitle";
import SingleReview from "../components/SingleReview";
import reviews from "../db/reviews.json";
import { Reviews } from "../types";
import Loading from "../components/Loading";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  meta: () => [
    {
      title: "Reviews | Peter Tumulty Senior Software Engineer",
    },
    {
      name: "description",
      content:
        "I provide a variety of different digital services, so you can focus on your customers, clients, and business operations.",
    },
  ],
});

export default ReviewsPage;

function ReviewsPage() {
  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Reviews" />
      </div>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col mx-auto w-full justify-center max-w-screen-md">
          {reviews
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((review: Reviews, index: number) => (
              <SingleReview review={review} index={index} key={review?.name} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}

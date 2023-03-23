import { Metadata } from "next";
import dynamic from "next/dynamic";
import PageTitle from "components/PageTitle";
import { fetchAPI } from "utils/api";
import { IReviewsFields } from "types/contentful";
import { Suspense } from "react";
const SingleReview = dynamic(() => import("components/SingleReview"));
const Loading = dynamic(() => import("components/Loading"));
export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "Reviews | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

async function getData() {
  const reviewsQuery = `query {
  reviewsCollection(order:order_ASC){
    items {
      name
      order
      statement {
        json
      }
      company
    }
  }
}`;

  const reviews = await fetchAPI(reviewsQuery, {});

  return reviews?.data?.reviewsCollection?.items;
}

const Page = async () => {
  const data: IReviewsFields[] = await getData();

  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Reviews" />
      </div>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col mx-auto w-full justify-center max-w-screen-md">
          {data.map((review: IReviewsFields, index: number) => (
            <SingleReview review={review} index={index} key={review?.name} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Page;

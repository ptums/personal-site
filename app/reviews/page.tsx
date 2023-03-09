import { Metadata } from "next";
import PageTitle from "components/PageTitle";
import { fetchAPI } from "utils/api";
import { IReviewsFields } from "types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SingleReview from "components/SingleReview";

export const metadata: Metadata = {
  title: "Previous Work | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

async function getData() {
  const reviewsQuery = `query {
  reviewsCollection{
    items {
      name
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

  console.log(data);

  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Reviews" />
      </div>
      <div className="flex flex-col mx-auto w-full justify-center max-w-screen-md">
        {data.map((review: IReviewsFields, index: number) => (
          <SingleReview review={review} index={index} key={review?.name} />
        ))}
      </div>
    </div>
  );
};

export default Page;

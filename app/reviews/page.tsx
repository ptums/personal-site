import { Metadata } from "next";
import dynamic from "next/dynamic";
import PageTitle from "components/PageTitle";
import { Suspense } from "react";
import prisma from "../../prisma";
import SingleReview from "components/SingleReview";
import { reviews } from "@prisma/client";

const Loading = dynamic(() => import("components/Loading"));

export const metadata: Metadata = {
  title: "Reviews | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

const Page = async () => {
  const data: reviews[] = await prisma.reviews.findMany();

  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Reviews" />
      </div>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col mx-auto w-full justify-center max-w-screen-md">
          {data.map((review: reviews, index: number) => (
            <SingleReview review={review} index={index} key={review?.name} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Page;

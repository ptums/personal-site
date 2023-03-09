"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IPostFields } from "types/contentful";
import PageAnimationLayout from "./PageAnimationLayout";

const slugify = (title: string) =>
  `/posts/${title.replaceAll(/ /g, "-").toLowerCase()}`;

const SinglePost = ({ post, index }: { post: IPostFields; index: number }) => (
  <PageAnimationLayout duration={1.2} delay={index * 0.5}>
    <Link
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
    </Link>
  </PageAnimationLayout>
);

export default SinglePost;

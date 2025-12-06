"use client";
import { playFairDisplay } from "app/font";

import PageTitle from "./PageTitle";

const Introduction = () => {
  return (
    <>
      <PageTitle title="Peter F. Tumulty" />

      <p
        className={`m-0 text-emerald-500 font-bold mb-8 ${playFairDisplay.className}`}
        style={{ letterSpacing: 4, fontSize: "1.25rem" }}
      >
        Software Engineer
      </p>
      <p className="text-base mb-6 mx-0 text-emerald-800 font-normal">
Building reliable software means more than just writing code—it’s about creating clean, maintainable systems that run smoothly and securely. Like a detective piecing together clues, I focus on understanding the hidden details that keep complex systems safe and dependable. I leverage automation and AI tools to speed up development and reduce errors, making processes smarter and more efficient. Behind the scenes, I manage networks and system infrastructure to ensure everything stays strong and ready to grow. Staying curious, I continuously learn new approaches to software design and monitoring to keep up with today’s fast-changing tech landscape. Ultimately, I bring a big-picture perspective that leads to smarter, more thoughtful solutions beyond just coding.
      </p>
    </>
  );
};

export default Introduction;

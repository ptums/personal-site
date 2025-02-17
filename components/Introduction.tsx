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
        Fullstack JavaScript Engineer
      </p>
      <p className="text-base mb-6 mx-0 text-emerald-800 font-normal">
        I&#39;m a JavaScript full-stack engineer with a focus on front-end
        development and a strong background in backend systems. I create fast,
        reliable, and easy-to-maintain applications, ensuring smooth user
        experiences while optimizing performance, scalability, and automated
        CI/CD workflows for seamless deployments. My goal is to build software
        that works smoothly for users while being efficient and scalable behind
        the scenes.
      </p>
    </>
  );
};

export default Introduction;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IPreviousWorkFields } from "types/contentful";
import { playFairDisplay } from "app/font";

const SingleProject = ({ project }: { project: IPreviousWorkFields }) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <div
      className="relative rounded	mb-12 max-w-full lg:my-6 lg:mx-8 bg-white shadow flex flex-col items-center justify-center"
      style={{ width: 420, height: 210 }}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <a href={project.slug} target="_blank">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <video  style="max-width:100%" class="graphic-container mobile-video" autoplay="true" muted="true" playsinline="true" loop="true" >
              <source src=${project.video} type="video/mp4" />
            </video>
          `,
          }}
        />
        <motion.div
          initial={false}
          animate={
            showDescription
              ? { height: 85, opacity: 1, display: "initial" }
              : { height: 0, opacity: 0, display: "none" }
          }
          className="bg-emerald-800 bg-opacity-75 absolute bottom-0 w-full min-h-min text-white text-left"
        >
          <p className="text-base mx-2 mt-1 text-white text-white font-semibold">
            {project.label}
          </p>
          <p
            className={`text-sm mx-2 mb-2 text-white text-white font-semibold max-w-full ${playFairDisplay.className}`}
          >
            Stack:{" "}
            <span className="text-white inline font-normal">
              {project.stack}
            </span>
          </p>
        </motion.div>
      </a>
    </div>
  );
};

export default SingleProject;

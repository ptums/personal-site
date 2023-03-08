"use client";
import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Project } from "../types/Project";

interface Props {
  project: Project;
}

/**
 * 
 * 
 * const Description = styled.div`
  background-color: ${(props) => props.theme.colors.darkGreenOpacity};
  text-align: left;
  position: absolute;
  bottom: 0px;
  width: 100%;
  opacity: 0;
  transition: all 0.2s;
 * @returns 
 */
const SingleProject = ({ slug, video, label, stack }: Project) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  return (
    <>
      <div
        className="relative rounded	mb-12 max-w-full lg:my-6 lg:mx-8 bg-white shadow flex flex-col items-center justify-center"
        style={{ width: 420, height: 210 }}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <a href={slug} target="_blank">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <video  style="max-width:100%" class="graphic-container mobile-video" autoplay = "true" muted = "true" playsinline = "true" loop = "true" >
              <source src=${video} type="video/mp4" />
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
              {label}
            </p>
            <p className="text-base mx-2 mb-2 text-white text-white font-semibold max-w-full">
              Tech Stack:{" "}
              <span className="text-sm text-white inline font-normal">
                {stack.map((s: string, index: number) => (
                  <Fragment key={s}>
                    {s}
                    {index !== stack.length - 1 ? ", " : ""}
                  </Fragment>
                ))}
              </span>
            </p>
          </motion.div>
        </a>
      </div>
    </>
  );
};

export default SingleProject;

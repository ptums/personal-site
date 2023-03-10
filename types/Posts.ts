import { IPostFields } from "types/contentful";

export type Posts = IPostFields & {
  sys: {
    id: string;
  };
};

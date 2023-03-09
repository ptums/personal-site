// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPostFields {
  /** Body */
  body?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Date */
  date?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Tag Line */
  tagLine?: string | undefined;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPreviousWorkFields {
  /** slug */
  slug?: string | undefined;

  /** video */
  video?: string | undefined;

  /** label */
  label?: string | undefined;

  /** stack */
  stack?: string | undefined;
}

export interface IPreviousWork extends Entry<IPreviousWorkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "previousWork";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IReviewsFields {
  /** name */
  name?: string | undefined;

  /** company */
  company?: string | undefined;

  /** statement */
  statement?: Document | undefined;

  /** order */
  order?: number | undefined;
}

export interface IReviews extends Entry<IReviewsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "reviews";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "post" | "previousWork" | "reviews";

export type IEntry = IPost | IPreviousWork | IReviews;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
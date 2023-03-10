export const slugify = (title: string) =>
  `/blog/post/${title.replaceAll(/ /g, "-").toLowerCase()}`;

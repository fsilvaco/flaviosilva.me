import { READY_POST_ID } from "~/constants";
import type { Post } from "~/types";

export const getReadyPosts = (posts: Post[]) => {
  const readyPosts = posts.filter(({ properties }) =>
    properties.Tags.multi_select.find(({ id }) => id === READY_POST_ID)
  );

  return { readyPosts };
};

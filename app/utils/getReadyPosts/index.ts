import { STATUS_DONE_ID } from "~/constants";
import type { Post } from "~/types";

export const getReadyPosts = (posts: Post[]) => {
  const readyPosts = posts.filter(
    ({ properties }) => properties.Status.status?.id === STATUS_DONE_ID
  );

  return { readyPosts };
};

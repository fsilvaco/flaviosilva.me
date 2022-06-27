import { STATUS_DONE_ID } from '~/constants'

import type { IPost } from '~/types'

export const getReadyPosts = (posts: IPost[]) => {
  const readyPosts = posts.filter(
    ({ properties }) => properties.Status.status?.id === STATUS_DONE_ID,
  )

  return readyPosts
}

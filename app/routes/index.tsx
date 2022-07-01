import type { LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import { Layout } from '~/components/Layout'

import { API } from '~/api/notion'
import type { IPost } from '~/types'

export interface LoaderData {
  posts: IPost[]
}

export const loader: LoaderFunction = async () => {
  const posts = await API.getPosts()

  return {
    posts: posts,
  }
}

export default function () {
  const { posts } = useLoaderData<LoaderData>()

  return (
    <Layout>
      <ul>
        {posts.map(({ id, title, slug }) => (
          <li key={id}>
            <Link to={`post/${slug}`}>
              <article>{title}</article>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

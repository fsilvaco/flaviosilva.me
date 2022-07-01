import type { NotionBlock } from '@9gustin/react-notion-render'
import { Render } from '@9gustin/react-notion-render'
import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Layout } from '~/components/Layout'

import { API } from '~/api/notion'
import { useTitle } from '~/hooks/use-title'
import type { IPost } from '~/types'

import '@9gustin/react-notion-render/dist/index.css'
interface LoaderData {
  blocks: NotionBlock[]
  post: IPost
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params
  const posts = await API.getPosts()

  const post = posts.find((item) => item.slug === slug)

  const blocks = await API.getBlocks(post?.id)

  return {
    blocks: blocks,
    post: post,
  }
}

export default function Post() {
  const { blocks, post } = useLoaderData<LoaderData>()

  useTitle(post.title)

  return (
    <Layout>
      <h1>{post.title}</h1>
      <Render blocks={blocks} classNames />
    </Layout>
  )
}

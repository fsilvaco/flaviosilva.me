import { useLoaderData } from "@remix-run/react";
import { API } from "~/api/notion";
import type { LoaderFunction } from "@remix-run/node";
import type { IPost } from "~/types";
import { Link } from "react-router-dom";

export interface LoaderData {
  posts: IPost[];
}

export const loader: LoaderFunction = async () => {
  const posts = await API.getPosts();

  return {
    posts: posts,
  };
};

export default function () {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <main>
      <ul>
        {posts.map(({ id, title, slug }) => (
          <li key={id}>
            <Link to={`post/${slug}`}>
              <article>{title}</article>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

import { useLoaderData } from "@remix-run/react";
import { API } from "~/api/notion";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { Link } from "react-router-dom";

export interface LoaderData {
  posts: Post[];
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
        {posts.map(({ id, properties }) => (
          <li key={id}>
            <Link to={`post/${id}`}>
              <article>
                {properties.Name.title.map(({ plain_text }) => plain_text)}
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

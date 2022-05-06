import type { NotionBlock } from "@9gustin/react-notion-render";
import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlocks, getPage } from "~/api/notion";
import type { Page } from "~/types";

interface LoaderData {
  blocks: NotionBlock[];
  page: Page;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    blocks: blocks,
    page: page,
  };
};

export default function Post() {
  const { blocks, page } = useLoaderData<LoaderData>();

  return (
    <div>
      <h1>{page.properties.Name.title[0].plain_text}</h1>
      <Render blocks={blocks} classNames />
    </div>
  );
}

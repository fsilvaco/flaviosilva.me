import { Client } from "@notionhq/client";
import invariant from "tiny-invariant";
import { getReadyPosts } from "~/utils/getReadyPosts";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
const databaseId = process.env.NOTION_DATABASE_ID as string;

export const getPosts = async () => {
  const response = await notion.databases.query({ database_id: databaseId });
  // TODO: Solve this TS problem
  const { readyPosts } = getReadyPosts(response.results);
  return readyPosts;
};

export const getPage = async (pageId?: string) => {
  invariant(pageId);
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId?: string) => {
  invariant(blockId);
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  return response.results;
};

import { Client } from "@notionhq/client";
import invariant from "tiny-invariant";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
const databaseId = process.env.NOTION_DATABASE_ID as string;

export const getPosts = async () => {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results;
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

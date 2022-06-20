import { Client } from "@notionhq/client";
import invariant from "tiny-invariant";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
const databaseId = process.env.NOTION_DATABASE_ID as string;
export class API {
  static getPosts = async () => {
    const response = await notion.databases.query({ database_id: databaseId });
    return response.results;
  };

  static getPage = async (pageId?: string) => {
    invariant(pageId);
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  };

  static getBlocks = async (blockId?: string) => {
    invariant(blockId);
    const response = await notion.blocks.children.list({
      block_id: blockId,
    });
    return response.results;
  };
}

import { Client } from "@notionhq/client";
import slugify from "slugify";
import invariant from "tiny-invariant";
import { getReadyPosts } from "~/utils/getReadyPosts";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
const databaseId = process.env.NOTION_DATABASE_ID as string;
export class API {
  static getPosts = async () => {
    const response = await notion.databases.query({ database_id: databaseId });
    // @ts-ignore
    const posts = getReadyPosts(response.results);

    posts.map(
      (item) => (
        (item.title = item.properties.Name.title[0].plain_text),
        (item.slug = slugify(item.title, { lower: true }))
      )
    );
    return posts;
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

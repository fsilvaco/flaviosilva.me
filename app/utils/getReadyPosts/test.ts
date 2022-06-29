import { getReadyPosts } from '.'

const API_DATA = [
  {
    object: 'page',
    id: 'ff32133d-d992-4aef-98a8-9d7b4af63b36',
    created_time: '2022-06-20T02:46:00.000Z',
    last_edited_time: '2022-06-21T00:45:00.000Z',
    created_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    last_edited_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    cover: null,
    icon: {
      type: 'emoji',
      emoji: '🎊',
    },
    parent: {
      type: 'database_id',
      database_id: '04998351-ba83-4bca-a6eb-c67f298d85d0',
    },
    archived: false,
    properties: {
      Status: {
        id: 'ONhJ',
        type: 'status',
        status: {
          id: 'd8f90d57-6916-4ee5-9444-70ea22fc6973',
          name: 'In progress',
          color: 'blue',
        },
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'aaa',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'aaa',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/aaa-ff32133dd9924aef98a89d7b4af63b36',
  },
  {
    object: 'page',
    id: '2836678b-b62d-4456-a069-a36a2672f9da',
    created_time: '2022-04-29T21:16:00.000Z',
    last_edited_time: '2022-06-20T02:45:00.000Z',
    created_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    last_edited_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: '04998351-ba83-4bca-a6eb-c67f298d85d0',
    },
    archived: false,
    properties: {
      Status: {
        id: 'ONhJ',
        type: 'status',
        status: {
          id: '0450b402-58b0-485a-8114-6b4417c1b8a3',
          name: 'Done',
          color: 'green',
        },
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'My blog with Remix and Notion API',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'My blog with Remix and Notion API',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/My-blog-with-Remix-and-Notion-API-2836678bb62d4456a069a36a2672f9da',
  },
  {
    object: 'page',
    id: '37f20ff5-7ccc-4b2f-899f-1294156eba7d',
    created_time: '2022-04-29T21:16:00.000Z',
    last_edited_time: '2022-06-21T23:53:00.000Z',
    created_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    last_edited_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: '04998351-ba83-4bca-a6eb-c67f298d85d0',
    },
    archived: false,
    properties: {
      Status: {
        id: 'ONhJ',
        type: 'status',
        status: {
          id: 'd8f90d57-6916-4ee5-9444-70ea22fc6973',
          name: 'In progress',
          color: 'blue',
        },
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Hello world',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Hello world',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Hello-world-37f20ff57ccc4b2f899f1294156eba7d',
  },
  {
    object: 'page',
    id: '6d5a9922-9b8b-4a1e-84ae-e60007b28a0f',
    created_time: '2022-04-29T21:16:00.000Z',
    last_edited_time: '2022-06-21T01:18:00.000Z',
    created_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    last_edited_by: {
      object: 'user',
      id: '88ae970e-746b-45cd-afb8-0d2ccde793a5',
    },
    cover: null,
    icon: {
      type: 'emoji',
      emoji: '♦️',
    },
    parent: {
      type: 'database_id',
      database_id: '04998351-ba83-4bca-a6eb-c67f298d85d0',
    },
    archived: false,
    properties: {
      Status: {
        id: 'ONhJ',
        type: 'status',
        status: {
          id: '0450b402-58b0-485a-8114-6b4417c1b8a3',
          name: 'Done',
          color: 'green',
        },
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Another Article',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Another Article',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Another-Article-6d5a99229b8b4a1e84aee60007b28a0f',
  },
]

describe('getReadyPosts()', () => {
  it('should only fetch ready posts', () => {
    // @ts-ignore
    // FIXME: Solved this Typescript problem
    expect(getReadyPosts(API_DATA)).toHaveLength(2)
  })
})

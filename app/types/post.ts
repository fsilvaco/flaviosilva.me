export interface IPost {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon?: Icon;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  title: string;
  slug: string;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  Status: Status;
  Name: Name;
}

export interface Status {
  id: string;
  type: string;
  status?: status;
}

export interface status {
  id: string;
  name: string;
  color: string;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

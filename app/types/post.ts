export interface Post {
  id: string;
  created_time: string;
  properties: Properties;
}

interface Properties {
  Tags: Tags;
  Name: Name;
}

interface Tags {
  id: string;
  type: string;
  multi_select: any[];
}

interface Name {
  id: string;
  type: string;
  title: Title[];
}

interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

interface Text {
  content: string;
  link: any;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export enum ArticleBlocksType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlocksType;
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlocksType.CODE;
  code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlocksType.TEXT;
  title?: string;
  paragraphs: String[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlocksType.IMAGE;
  title?: string;
  src: string;
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleTextBlock
  | ArticleImageBlock;

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum ArticleView {
  LIST = "list",
  GRID = "grid",
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

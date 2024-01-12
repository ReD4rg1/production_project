import { User } from "@/entities/User";
import { ArticleBlocksType, ArticleType } from "../consts/article";

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

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

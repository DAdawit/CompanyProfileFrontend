export interface Children {
  type: string;
  text: string;
}

export interface Body {
  type: string;
  children: Children[];
}

export interface Data {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  body: Body[];
  author: string;
  headline: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
  seoTitle: string;
  seoDescription: string;
  tags: string;
  slug: string;
  excerpt: string;
}

export type Meta = Record<string, unknown>;

export interface BlogOutI {
  data: Data;
  meta: Meta;
}

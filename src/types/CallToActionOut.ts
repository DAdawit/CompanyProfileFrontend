export interface Data {
  id: number;
  documentId: string;
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type Meta = Record<string, unknown>;

export interface CallToActionOutI {
  data: Data;
  meta: Meta;
}

export interface Icon {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats?: string | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ServicesComponent {
  id: number;
  title: string;
  description: string;
  icon: Icon;
}

export interface Data {
  id: number;
  documentId: string;
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ServicesComponent: ServicesComponent[];
}

export type Meta = Record<string, unknown>;

export interface ServicesOutI {
  data: Data;
  meta: Meta;
}

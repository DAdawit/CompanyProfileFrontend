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

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Format {
  thumbnail: Thumbnail;
  small: Small;
  medium: Medium;
  large: Large;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats: Format;
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
  image: Image;
}

export type Meta = Record<string, unknown>;

export interface ServicesOutI {
  data: Data;
  meta: Meta;
}

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
  path?: string | null;
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

export interface HeroSlider {
  id: number;
  title: string;
  subtitle: string;
  image: Image;
}

export interface Data {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSlider: HeroSlider[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface HeroOutT {
  data: Data[];
  meta: Meta;
}

export interface Link {
  id: number;
  linkedin: string;
  email: string;
  telegram: string;
  instagram: string;
  tiktok: string;
}

export interface Primary_logo {
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

export interface Secondary_logo {
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

export interface Data {
  id: number;
  documentId: string;
  org_name: string;
  full_address: string;
  primary_phone: string;
  secondary_phone: string;
  email: string;
  po_box: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  links: Link;
  primary_logo: Primary_logo;
  secondary_logo: Secondary_logo;
}

export type Meta = Record<string, unknown>;

export interface OrgDetailOutI {
  data: Data;
  meta: Meta;
}

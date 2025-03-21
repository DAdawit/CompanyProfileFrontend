interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqsData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  faqs: Faq[];
}

export interface FaqsOutI {
  data: FaqsData;
  meta: Record<string, unknown>;
}

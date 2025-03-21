export interface TimeLineEvent {
  id: number;
  date_of_event: string;
  description: string;
  event: string;
}

export interface Data {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  timeLineEvents: TimeLineEvent[];
}

export type Meta = Record<string, unknown>;

export interface TimeLineEventsOutI {
  data: Data;
  meta: Meta;
}

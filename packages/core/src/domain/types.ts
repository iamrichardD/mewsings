export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}

export interface NarrativeWriting {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

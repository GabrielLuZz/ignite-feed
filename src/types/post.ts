interface PostAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostContent {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: PostAuthor;
  publishedAt: Date;
  content: PostContent[];
}
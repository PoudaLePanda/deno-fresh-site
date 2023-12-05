interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

interface Attrs {
  title: string;
  published_at: Date;
  snippet: string;
}

interface About {
  title: string;
  content: string;
}
import { getPost } from "./getpost.ts";

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const array: Post[] = [];
  for await (const file of files) {
    const slug: string = file.name.replace(".md", "");
    const post: Post | null = await getPost(slug);
    if (post) {
      array.push(post);
    }
  }
  const posts = await Promise.all(array) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}
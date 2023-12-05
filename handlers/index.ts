import { Handlers } from "$fresh/server.ts";
import { getPosts } from "../services/getposts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

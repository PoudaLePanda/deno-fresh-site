import { Handlers } from "$fresh/server.ts";
import { getPost } from "../services/getpost.ts";
import { PageProps } from "$fresh/server.ts";
import * as gfm from "https://deno.land/x/gfm@0.2.5/mod.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Post> = {
  async GET(_req: Request, ctx) {
    const post: Post | null = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
      </Head>
      <div
        class="mt-8 markdown-body"
        dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
      />
    </>
  )
}

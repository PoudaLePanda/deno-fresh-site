
import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { getAbout } from "../services/getabout.ts";
import * as gfm from "https://deno.land/x/gfm@0.2.5/mod.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<About> = {
  async GET(_req, ctx) {
    const about: About | null = await getAbout();
    if (about === null) return ctx.renderNotFound();
    return ctx.render(about);
  },
};
export default function AboutPage(props: PageProps<About>) {
  const about: About = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
      </Head>
      <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">{about.title}</h2>
          <p class="mb-12 text-lg text-gray-500">Avatar ici...</p>
          <div class="w-full">
          <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div
                class="mt-8 markdown-body"
                dangerouslySetInnerHTML={{ __html: gfm.render(about.content) }}
              />
          </div>
        </div>
      </div>
    </>
  );
}
import { extract } from 'https://deno.land/std@0.208.0/front_matter/any.ts';
import { join } from '$std/path/mod.ts';

export async function getPost(slug: string): Promise<Post | null> {
	const text: string = await Deno.readTextFile(join('./posts', `${slug}.md`));
	const { attrs, body }: { attrs: Attrs; body: string } = extract(text);
	return {
		slug,
		title: attrs.title,
		publishedAt: new Date(attrs.published_at),
		content: body,
		snippet: attrs.snippet,
	} as Post;
}

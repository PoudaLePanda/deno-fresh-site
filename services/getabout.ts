import { extract } from 'https://deno.land/std@0.208.0/front_matter/any.ts';
import { join } from '$std/path/mod.ts';

export async function getAbout(): Promise<About | null> {
	const text: string = await Deno.readTextFile(join('./content', `about.md`));
	const { attrs, body }: { attrs: Attrs; body: string } = extract(text);
	return {
		title: attrs.title,
		content: body,
	} as About;
}

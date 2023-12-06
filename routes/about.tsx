import { PageProps } from '$fresh/server.ts';
import { Handlers } from '$fresh/server.ts';
import { getAbout } from '../services/getabout.ts';
import * as gfm from 'https://deno.land/x/gfm@0.2.5/mod.ts';
import { Head } from '$fresh/runtime.ts';
import { Avatar } from '../components/avatar.tsx';

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
			<div class='container relative flex flex-col h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5'>
				<div class='flex flex-col items-center justify-center'>
					<h2 class='mb-1 text-3xl font-extrabold '>{about.title}</h2>
					<Avatar />
				</div>
				<div class='w-full'>
					<div class='flex flex-col w-full mb-5 sm:flex-row'>
						<div
							class='mt-8 prose'
							dangerouslySetInnerHTML={{
								__html: gfm.render(about.content),
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

import { PageProps } from '$fresh/server.ts';
import { Handlers } from '$fresh/server.ts';
import { getPosts } from '../services/getposts.ts';
import { PostList } from '../components/postlist.tsx';
import { Avatar } from '../components/avatar.tsx';
import { Hero } from '../components/hero.tsx';

export const handler: Handlers<Post[]> = {
	async GET(_req, ctx) {
		const posts = await getPosts();
		return ctx.render(posts);
	},
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
	const posts: Post[] = props.data;
	return (
		<>
			<Hero />
			<div class='mt-8'>
				<PostList posts={posts} />
			</div>
		</>
	);
}

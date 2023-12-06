import { PageProps } from '$fresh/server.ts';
import { Handlers } from '$fresh/server.ts';
import { PostList } from '../components/postlist.tsx';
import { getPosts } from '../services/getposts.ts';
export const handler: Handlers<Post[]> = {
	async GET(_req, ctx) {
		const posts = await getPosts();
		return ctx.render(posts);
	},
};

export default function ProjectsPage(props: PageProps<Post[]>) {
	const posts: Post[] = props.data;
	return (
		<>
			<div class='mt-8'>
				<PostList posts={posts} />
			</div>
		</>
	);
}

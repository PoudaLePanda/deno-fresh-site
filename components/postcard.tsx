import { Glowing } from './glowing-button.tsx';

export function PostCard(props: { post: Post }) {
	const { post } = props;
	return (
			<Glowing>
				<a href={`/${post.slug}`} >
					<div class='bg-background p-7 rounded-md'>
						<h1 class='font-bold text-xl mb-2'>
							{post.title}
							<time class='ml-4 text-primary-300'>
								{new Date(post.publishedAt).toLocaleDateString(
									'en-us',
									{
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									},
								)}
							</time>
						</h1>
						<p>{post.snippet}</p>
					</div>
				</a>
			</Glowing>
	);
}

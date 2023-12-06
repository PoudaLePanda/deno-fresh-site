import { PageProps } from '$fresh/server.ts';
import { Footer } from '../components/footer.tsx';
import { NavBar } from '../components/navbar.tsx';
import Video from '../islands/Video.tsx';

export default function Layout({ Component, state }: PageProps) {
	// do something with state here
	return (
		<div class='relative theme-site bg-background text-foreground'>
			<Video/>
			<NavBar />
			<main class='max-w-screen-md px-4 pt-16 mx-auto min-h-screen'>
				<Component />
			</main>
			<Footer />
		</div>
	);
}

import DarkMode from '../islands/DarkMode.tsx';
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx"
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx"

export function NavBar() {
	return (
		<div class='sticky inset-0 z-50 bg-background shadow-sm'>
			<nav class='container flex gap-8 px-6 py-4'>
				<a href='/' class="flex flex-row items-center justify-center hover:text-accent">
					<image
						src='https://www.svgrepo.com/show/499831/target.svg'
						loading='lazy'
						style='color:transparent'
						width='32'
						height='32'
					/>
					<span class="ml-4">Léo Meyniel</span>
				</a>
				<div class="flex-1 flex flex-row justify-end">
					<ul class='items-center justify-center gap-6 flex mr-4'>
						<li class='pt-1.5 font-dm text-sm font-medium hover:text-accent'>
							<a href='/about'>about</a>
						</li>
						<li class='pt-1.5 font-dm text-sm font-medium hover:text-accent'>
							<a href='/projects'>Projects</a>
						</li>
					</ul>
					<DarkMode prev={'system'} />
					<ul class='items-center justify-center gap-6 flex ml-4'>
						<li class='pt-1.5 font-dm text-sm font-medium hover:text-accent'>
							<a href="https://github.com/PoudaLePanda" target="blanck">
								<IconBrandGithub class="w-6 h-6" />
							</a>
						</li>
						<li class='pt-1.5 font-dm text-sm font-medium hover:text-accent'>
							<a href="https://www.linkedin.com/in/leo-meyniel-dev-full-stack/" target="blanck">
								<IconBrandLinkedin class="w-6 h-6" />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

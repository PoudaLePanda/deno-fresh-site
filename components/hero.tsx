export function Hero() {
	return (
		<div class='flex relative z-20 items-center overflow-hidden'>
			<div class='container mx-auto px-6 flex relative py-16'>
				<div class='sm:w-2/3 lg:w-2/5 flex flex-col relative z-20'>
					<span class='w-20 h-2 bg-foreground dark:bg-foreground mb-12'>
					</span>
					<h1 class='font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none'>
						Leo
					</h1>
					<p class='text-sm sm:text-base'>
						Creative, Efficient
					</p>

					<p class='text-sm sm:text-base'>
							Adapts to any tech playground.
					</p>
					<div class='flex mt-8'>
						<a
							href='/projects'
							class='uppercase py-2 px-4 rounded-lg bg-primary border-2 border-transparent text-primary-foreground text-md mr-4 hover:bg-primary-400'
						>
							Explore Projects
						</a>
						<a
							href='https://www.linkedin.com/in/leo-meyniel-dev-full-stack/' target="blanck"
							class='uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-primary text-primary dark:text-primary-foreground hover:bg-primary hover:text-primary-foreground text-md'
						>
							Check on Linkedin
						</a>
					</div>
				</div>
				<div class='hidden sm:block sm:w-1/3 lg:w-3/5 relative'>
					<img
						src='https://www.tailwind-kit.com/images/object/10.png'
						class='max-w-xs md:max-w-sm m-auto'
					/>
				</div>
			</div>
		</div>
	);
}

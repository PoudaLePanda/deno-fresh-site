import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx"

export function Footer() {
	return (
		<footer>
			<div class='container px-4 mx-auto'>
				<div class='pt-24 pb-11 mx-auto max-w-4xl'>
					<a class='block md:mx-auto mb-5 max-w-max' href='/'>
						<IconBrandDeno class="w-8 h-8" />
					</a>
					<div class='flex flex-wrap justify-center -mx-3 lg:-mx-6'>
						<div class='w-full md:w-auto p-3 md:px-6'>
							<a
								href='/'
								class='inline-block text-lg text-gray-500 hover:text-gray-600 font-medium'
							>
								Home
							</a>
						</div>
						<div class='w-full md:w-auto p-3 md:px-6'>
							<a
								href='/about'
								class='inline-block text-lg text-gray-500 hover:text-gray-600 font-medium'
							>
								About
							</a>
						</div>
						<div class='w-full md:w-auto p-3 md:px-6'>
							<a
								href='/projects'
								class='inline-block text-lg text-gray-500 hover:text-gray-600 font-medium'
							>
								Projects
							</a>
						</div>
						<div class='w-full md:w-auto p-3 md:px-6'>
							<a
								class='inline-block text-lg text-gray-500 hover:text-gray-600 font-medium'
								href='/contact'
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class='border-b border'></div>
			<div class='container px-4 mx-auto'>
				<p class='py-10 md:pb-20 text-md  font-medium text-center'>
					© 2023 leomeyniel.fr. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

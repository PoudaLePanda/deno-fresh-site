import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Glowing(props: JSX.HTMLAttributes<HTMLInputElement>) {
	return (
		<div  class={`relative group cursor-pointer ${
        props.class ?? ""
      }`}>
			<div class='absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'>
			</div>
			<div class='relative px-7 py-6 bg-background ring-1 ring-foreground/5 rounded-lg leading-none flex items-top justify-start space-x-6'>
				<div class='space-y-2'>
					<p class='text-foreground'>
						{props.children}
					</p>
				</div>
			</div>
		</div>
	);
}

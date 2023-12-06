import { asset } from '$fresh/runtime.ts';

export function Avatar() {
	return (
		<div class='relative my-4'>
			<image
				src={asset('/avatar.png')}
				class='relative object-cover shrink-0 h-auto w-28 z-10 rounded-xl'
			/>
		</div>
	);
}

import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import {
	GrActions,
	GrMoon,
	GrSystem,
} from 'https://deno.land/x/react_icons@0.2.3/gr/mod.ts';

interface DarkModeProps {
	prev: 'light' | 'dark' | 'system';
}

export default function DarkMode(props: DarkModeProps) {
	/**
	 * Used to format mode as text in screen
	 */
	function getMode(): 'light' | 'dark' | 'system' {
		if (!IS_BROWSER) {
			return props.prev;
		}
		if (localStorage.theme === 'dark') {
			return 'dark';
		}
		if (localStorage.theme) {
			return 'light';
		}
		return 'system';
	}

	function updateMode() {
		const w = window as unknown as { isDark: boolean };
		w.isDark = localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.classList[w.isDark ? 'add' : 'remove']('dark');
	}

	const [mode, setMode] = useState(getMode());

	const setDarkModeOn = () => {
		localStorage.theme = 'dark';
		updateMode();
		setMode('dark');
	};

	const setDarkModeAuto = () => {
		delete localStorage.theme;
		updateMode();
		setMode('system');
	};

	const setDarkModeOff = () => {
		localStorage.theme = 'light';
		updateMode();
		setMode('light');
	};

	return (
		<div class='flex gap-2'>
			<button
				class='h-12 w-12 rounded-lg p-2 block dark:hidden'
				onClick={setDarkModeOn}
			>
				<svg
					class='fill-grey-700'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'>
					</path>
				</svg>
			</button>

			{
				/* <button onClick={setDarkModeAuto}>
        <GrSystem />
      </button> */
			}

			<button
				class='h-12 w-12 rounded-lg p-2 hidden dark:block'
				onClick={setDarkModeOff}
			>
				<svg
					class='fill-yellow-500'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path
						d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
						fill-rule='evenodd'
						clip-rule='evenodd'
					>
					</path>
				</svg>
			</button>
			{
				/* <div>
        Current Mode: <b class="text-3xl">{mode}</b>
      </div> */
			}
		</div>
	);
}

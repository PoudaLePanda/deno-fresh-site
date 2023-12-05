import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component, state }: PageProps) {
  const code = `function global_dark(change) {
    if (change === 'auto') delete localStorage.theme; else if (change === 'on') localStorage.theme = 'dark'; else if (change === 'off') localStorage.theme = 'light';
    window.isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
  }
  global_dark();`;
  return (
    <html lang="fr">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Léo Meyniel</title>
        <link href={asset("/styles.css")} rel="stylesheet" type="text/css" />
        <script
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}

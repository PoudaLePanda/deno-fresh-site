// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_slug_ from "./routes/[slug].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $about from "./routes/about.tsx";
import * as $index from "./routes/index.tsx";
import * as $projects from "./routes/projects.tsx";
import * as $DarkMode from "./islands/DarkMode.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[slug].tsx": $_slug_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/about.tsx": $about,
    "./routes/index.tsx": $index,
    "./routes/projects.tsx": $projects,
  },
  islands: {
    "./islands/DarkMode.tsx": $DarkMode,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

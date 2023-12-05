import DarkMode from "../islands/DarkMode.tsx";

export function NavBar() {
  return (
    <div class="sticky inset-0 z-50 bg-background/80 backdrop-blur-lg">
        <nav class="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
            <div class="relative flex items-center">
                <a href="/">
                  <image src="https://www.svgrepo.com/show/499831/target.svg" loading="lazy" style="color:transparent" width="32" height="32" />
                </a>
            </div>
            <ul class="items-center justify-center gap-6 flex">
                <li class="pt-1.5 font-dm text-sm font-medium">
                    <a href="/about">about</a>
                </li>
                <li class="pt-1.5 font-dm text-sm font-medium">
                    <a href="/projects">Projects</a>
                </li>
            </ul>
            <div class="flex-grow"></div>
            <DarkMode prev={"system"} />
        </nav>
    </div>
  );
}
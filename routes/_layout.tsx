import { PageProps } from "$fresh/server.ts";
import { Footer } from "../components/footer.tsx";
import { NavBar } from "../components/navbar.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class=" theme-site bg-background text-foreground">
      <NavBar />
      <main class="max-w-screen-md px-4 pt-16 mx-auto min-h-screen">
        <Component />
      </main>
      <Footer />
    </div>
  );
}
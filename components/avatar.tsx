
export function Avatar() {
  return (
    <div class="relative my-4">
        <div class="absolute -inset-2">
            <div
                class="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
            </div>
        </div>
        <image src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
            class="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl" />
    </div>
  );
}
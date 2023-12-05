import { PostCard } from "./postcard.tsx";


export function PostList(props: { posts: Post[] }) {
  const { posts } = props;
  return (
<div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight">Services</h2>
    <p class="mb-12 text-lg ">Here is a few of the awesome Services we provide.</p>
    <div class="w-full">
        <div class="flex flex-wrap gap-5 w-full mb-5 sm:flex-row">
          {posts.map((post: Post) => <PostCard post={post} />)}
        </div>
    </div>
</div>
  );
}
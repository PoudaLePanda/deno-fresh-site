export function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <a href={`/${post.slug}`} class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
        <div class="bg-white p-7 rounded-md">
        <h1 class="font-bold text-xl mb-2">
          {post.title}
              <time class="text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </h1>
            <p>{post.snippet}</p>
        </div>
    </a>
  );
}
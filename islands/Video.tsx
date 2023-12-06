
import { asset } from '$fresh/runtime.ts';


export default function Video() {

  return (
    <div id="background-video">
      <video autoplay muted loop class="fixed -top-1 -bottom-1 -left-1 -right-1 ">
        <source src={asset('/multicolor02(2160p).mp4')} type="video/mp4" />
      </video>
      <svg role="none" class="fixed -top-1 -bottom-1 -left-1 -right-1 w-screen h-screen bg-background opacity-80">
        <filter id="blur11">
          <feGaussianBlur stdDeviation="1.1" edgeMode="duplicate" />
        </filter>
      </svg>
    </div>
	);
}

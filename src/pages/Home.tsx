import { Ripple } from "../components/magicui/ripple";

export function Home() {
  return (
    <div className="relative flex h-[1000px] w-[1000px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        still just fucking around
      </p>
      <Ripple />
    </div>
  );
}

export default Home;
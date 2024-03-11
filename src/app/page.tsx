import { Console } from "@/components/console";
import { Gim } from "@/components/gim";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <header className="mt-24 flex w-full max-w-screen-lg items-center justify-between">
        <div className="inline-flex items-center">
          <Gim className="size-20" />
          <h1 className="font-mono text-4xl font-bold">GIM.</h1>
        </div>
        <h2 className="relative font-mono text-lg">
          Veja os componentes da web com outros olhos
        </h2>
      </header>
      <main className="flex w-full max-w-screen-lg flex-col">
        <section
          id="terminal"
          className="flex min-h-screen w-full items-center justify-center space-x-32"
        >
          <div className="w-96 space-y-4">
            <div className="space-y-6">
              <h2>Terminal</h2>
              <p className="text-sm text-foreground-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                hic, deleniti dignissimos doloremque aut natus nulla
                perspiciatis perferendis cum dolorem?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-md bg-accent p-1.5 px-2 text-xs">
                react
              </span>
              <span className="rounded-md bg-accent p-1.5 px-2 text-xs">
                tailwindcss
              </span>
            </div>
          </div>
          <div className="w-full">
            <Console />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

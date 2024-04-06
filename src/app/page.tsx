import { Gim } from "@/components/gim";
import { Cookies } from "@/components/owns/cookies";
import { UserCard } from "@/components/owns/user-card";
import { Yorpex } from "@/components/yorpex";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-56">
      <header className="mt-24 flex w-full max-w-screen-lg items-center justify-between">
        <div className="inline-flex items-center">
          <Gim className="size-20" />
          <h1 className="font-mono text-4xl font-bold">GIM.</h1>
        </div>
        <h2 className="relative font-mono text-lg">
          Veja os componentes da web com outros olhos
        </h2>
      </header>
      <main className="flex min-h-[40vh] w-full max-w-screen-lg flex-col">
        <UserCard />
        <Cookies />
      </main>
      <footer className="flex w-full items-center justify-between px-8 pb-8">
        <div className="inline-flex items-center font-mono text-sm text-foreground/40">
          By{" "}
          <Link
            className="ml-2 flex items-center"
            href={"https://yorpex.com"}
            target="_blank"
          >
            Yorpex <Yorpex className="ml-2 size-2" />
          </Link>
        </div>
        <div className="font-mono text-sm text-foreground/40">
          <Link href={"https://felipes.dev"} target="_blank">
            Luis Felipe
          </Link>{" "}
          • {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

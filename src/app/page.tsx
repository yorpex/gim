import { Gim } from "@/components/gim";
import { Cookies } from "@/components/owns/cookies";
import { UserCard } from "@/components/owns/user-card";
import { ShowcaseTemplate } from "@/components/showcase-template";
import { Yorpex } from "@/components/yorpex";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-56">
      <header className="mt-24 flex w-full max-w-screen-lg flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center">
          <Gim className="size-20" />
          <h1 className="font-mono text-4xl font-bold">GIM.</h1>
        </div>
        <h2 className="ml-5 font-mono text-lg sm:ml-0">
          Veja os componentes da web com outros olhos
        </h2>
      </header>
      <main className="flex min-h-[40vh] w-full max-w-screen-lg flex-col space-y-12">
        <ShowcaseTemplate
          id="user-card"
          name="User Card"
          description="O Cartão de Usuário minimalista é uma solução eficaz para exibir
    informações do usuário de forma discreta. Com um design clean, ele
    revela mais detalhes ao ser focado e oferece um menu de contexto.
    Totalmente acessível, é ideal para projetos que buscam uma interface
    intuitiva e elegante."
          technologies={["react", "tailwindcss", "shadcn"]}
        >
          <UserCard />
        </ShowcaseTemplate>
        <ShowcaseTemplate
          id="cookies"
          name="Cookies"
          description="Minim laboris deserunt sunt sit est eu tempor deserunt Lorem cupidatat ut occaecat. Incididunt voluptate duis officia sint aliqua enim. Voluptate sit aute culpa exercitation eiusmod irure commodo sit ullamco aliquip id adipisicing. Tempor aliquip exercitation excepteur do duis incididunt pariatur dolor pariatur irure eu incididunt mollit. Mollit nisi anim ea minim magna sint mollit non fugiat esse. Laboris voluptate quis sit minim laboris eiusmod proident."
          technologies={["react", "tailwindcss"]}
          reverse
        >
          <Cookies />
        </ShowcaseTemplate>
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

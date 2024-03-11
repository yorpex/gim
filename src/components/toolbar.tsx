import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { ArrowUp } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Yorpex } from "./yorpex";

export function Toolbar() {
  return (
    <div className="flex items-center justify-center">
      <div className="fixed bottom-5 z-20 inline-flex items-center space-x-2 overflow-hidden rounded-full border bg-background px-4 py-2 pr-2">
        <div className="text-sm text-foreground-500">7 componentes</div>
        <Divider orientation="vertical" className="h-5" />
        <div className="inline-flex items-center space-x-1">
          <Tooltip content="Voltar para o início">
            <Button
              isIconOnly
              radius="full"
              onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              size="sm"
              variant="light"
            >
              <ArrowUp className="size-4" />
            </Button>
          </Tooltip>
          <ThemeToggle />
          <Tooltip content="Patrocinador">
            <Button
              as={Link}
              href="https://yorpex.vercel.app"
              isExternal={true}
              isIconOnly
              radius="full"
              size="sm"
              variant="light"
            >
              <Yorpex className="size-4" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

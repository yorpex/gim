"use client";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Yorpex } from "../yorpex";
import { ThemeToggle } from "./theme-toggle";

export function Toolbar() {
  return (
    <div className="flex items-center justify-center">
      <div className="fixed bottom-5 z-20 inline-flex items-center space-x-2 overflow-hidden rounded-full border bg-background px-4 py-2 pr-2">
        <div className="text-foreground-500 ml-1 text-sm">2 componentes</div>
        <div className="inline-flex items-center space-x-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  size="icon"
                  className="rounded-full"
                  variant="ghost"
                >
                  <ArrowUp className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Voltar para o início</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ThemeToggle />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"https://yorpex.com"}
                  target="_blank"
                  className={cn(
                    buttonVariants({
                      className: "rounded-full",
                      size: "icon",
                      variant: "ghost",
                    }),
                  )}
                >
                  <Yorpex className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Patrocinador</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

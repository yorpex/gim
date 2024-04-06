"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="size-4 rounded-full bg-foreground"></div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Mudar tema</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

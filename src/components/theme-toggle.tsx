"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Tooltip content="Mudar tema">
      <Button
        isIconOnly
        radius="full"
        size="sm"
        variant="light"
        onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className="size-4 rounded-full bg-black dark:bg-white"></div>
      </Button>
    </Tooltip>
  );
}

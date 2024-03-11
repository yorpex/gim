"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@nextui-org/button";
import { Check, Copy } from "lucide-react";

export interface ClipboardProps extends ButtonProps {
  board?: string;
}

const Clipboard = React.forwardRef<HTMLButtonElement, ClipboardProps>(
  ({ className, board = "", ...props }, ref) => {
    const [copy, setCopy] = React.useState(false);

    return (
      <Button
        aria-label="Copy"
        className={cn(className)}
        isIconOnly
        ref={ref}
        onPress={() => {
          void navigator.clipboard.writeText(board);
          setCopy(true);
          setTimeout(() => {
            setCopy(false);
          }, 1000);
        }}
        {...props}
      >
        <Copy
          className={`absolute size-[1.2rem] transition ${copy ? "scale-0" : "scale-100"}`}
        />
        <Check
          className={`absolute size-[1.2rem] transition ${copy ? "scale-100" : "scale-0"}`}
        />
      </Button>
    );
  },
);
Clipboard.displayName = "Clipboard";

export { Clipboard };

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { AlertCircle, XCircle } from "lucide-react";
import { type HTMLAttributes, type Ref } from "react";
import { Clipboard, type ClipboardProps } from "../clipboard";

interface TerminalProps extends HTMLAttributes<HTMLTableElement> {
  classNames?: {
    wrapper?: string;
    group?: string;
    log?: string;
    tbody?: string;
    clipboard?: string;
  };
  children?: React.ReactNode;
  clipboard?: ClipboardProps & { ref?: Ref<HTMLButtonElement> };
}

export function Terminal(props: TerminalProps) {
  return (
    <div className={cn("relative flex flex-col", props.classNames?.wrapper)}>
      <div
        className={cn(
          "w-full space-x-2 bg-accent py-3 pl-3",
          props.classNames?.group,
        )}
        role="group"
        aria-label="Filter logs by type"
      >
        <Button size="sm" className="bg-default-200" radius="full">
          Todas logs (100)
        </Button>
        <Button
          startContent={<XCircle className="h-3 w-3" />}
          className="bg-default-200"
          size="sm"
          radius="full"
        >
          Erros (0)
        </Button>
        <Button
          startContent={<AlertCircle className="h-3 w-3" />}
          className="bg-default-200"
          size="sm"
          radius="full"
        >
          Alertas (0)
        </Button>
      </div>
      <table
        role="log"
        className={cn(
          "flex w-full items-start justify-start bg-white dark:bg-black",
          props.classNames?.log,
        )}
        {...props}
      >
        <tbody
          className={cn("w-full font-mono text-sm", props.classNames?.tbody)}
        >
          {props.children}
        </tbody>
      </table>
      <Clipboard
        variant="bordered"
        className={cn(
          "absolute right-2 top-2 z-10",
          props.classNames?.clipboard,
        )}
        title="Copy logs to the clipboard"
        {...props.clipboard}
      />
    </div>
  );
}

"use client";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "../ui/context-menu";
dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function UserCard() {
  const [open, setOpen] = useState<boolean | "closing">(false);
  const [contextOpen, setContextOpen] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <ContextMenu
      onOpenChange={(openChanged) => {
        setContextOpen(openChanged);
        setOpen(openChanged);
        if (openChanged === false && ref !== null) {
          setOpen("closing");
          setContextOpen(false);
          ref.current?.blur();
        }
      }}
    >
      <ContextMenuTrigger>
        <Link
          ref={ref}
          href={"#user-card"}
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            if (contextOpen) return;
            setOpen(false);
          }}
          onFocus={() => {
            if (open === "closing") return setOpen(false);
            setOpen(true);
          }}
          onBlur={() => {
            if (contextOpen) return;
            setOpen(false);
          }}
          data-state={open ? "open" : "closed"}
          className="group relative flex h-16 w-44 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[5rem] border outline-none transition-all duration-300 data-[state=open]:h-40 data-[state=open]:rounded-3xl data-[state=open]:border-dashed"
        >
          <div>
            <Avatar className="absolute left-5 top-3 size-10 transition-all duration-300 group-data-[state=open]:top-6">
              <AvatarImage src="https://github.com/trylooney.png" />
              <AvatarFallback>FD</AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 right-5 transition-all duration-300 group-data-[state=open]:top-6">
              <p className="-translate-y-4 text-sm font-medium opacity-0 transition-all delay-100 duration-75 group-data-[state=open]:translate-y-0 group-data-[state=open]:opacity-100">
                Luis Felipe
              </p>
              <span className="text-sm text-foreground/50 transition-all">
                @felipesdev
              </span>
            </div>
          </div>
          <div className="relative left-8 mt-12 w-full opacity-0 transition-all delay-75 duration-200 group-data-[state=open]:left-0 group-data-[state=open]:opacity-100">
            <span className="ml-4 text-sm text-muted-foreground">
              Membro •{" "}
              <time className="text-foreground">
                {dayjs(new Date(2024, 3, 6, 0, 0, 0, 0)).fromNow()}
              </time>
            </span>
            <span className="ml-4 flex items-center space-x-1 text-sm">
              <div className="size-4 rounded-full bg-gradient-to-bl from-blue-600 to-rose-400"></div>
              <span>Developer</span>
            </span>
          </div>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem
          inset
          id="profile"
          onClick={() => toast("profile triggered")}
        >
          Perfil
        </ContextMenuItem>
        <ContextMenuItem
          inset
          id="posts"
          onClick={() => toast("posts triggered")}
        >
          Postagens
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem
          id="add-friend"
          inset
          onClick={() => toast("add-friend triggered")}
        >
          Adicionar
        </ContextMenuItem>
        <ContextMenuItem
          id="report"
          inset
          onClick={() => toast("report triggered")}
        >
          Denunciar
          <ContextMenuShortcut>
            <AlertTriangle className="size-4" />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Feedback
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

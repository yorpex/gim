"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ui/context-menu";

export function UserCard() {
  return (
    <section
      id="user-card"
      className="flex min-h-[70vh] w-full items-start justify-center space-x-32"
    >
      <div className="w-96 space-y-4">
        <div className="space-y-6">
          <h2>User Card</h2>
          <p className="text-foreground-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic,
            deleniti dignissimos doloremque aut natus nulla perspiciatis
            perferendis cum dolorem?
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-md bg-accent p-1.5 px-2 text-xs">react</span>
          <span className="rounded-md bg-accent p-1.5 px-2 text-xs">
            tailwindcss
          </span>
        </div>
      </div>
      <div className="relative flex h-full min-h-96 w-full items-center justify-center rounded-lg border">
        <ContextMenu>
          <ContextMenuTrigger>
            <Link
              href={"#user-card"}
              className="group relative flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-lg border outline-none transition-all hocus:w-48 hocus:border-dashed"
            >
              <Avatar className="absolute left-6 top-3 size-12 transition-all duration-300 group-hocus:left-4 group-hocus:top-6">
                <AvatarImage src="https://github.com/trylooney.png" />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <div className="absolute top-10 transition-all duration-300 group-hocus:right-6 group-hocus:top-6">
                <p className="text-sm font-medium opacity-0 transition-all delay-100 duration-75 group-hocus:opacity-100">
                  Luis Felipe
                </p>
                <span className="text-sm text-foreground/50 transition-all">
                  @felipesdev
                </span>
              </div>
            </Link>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuLabel inset>People</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </section>
  );
}

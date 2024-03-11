"use client";

import { Tooltip, type TooltipProps } from "@nextui-org/tooltip";
import { type HTMLAttributes } from "react";

export interface TerminalLogProps extends HTMLAttributes<HTMLTableRowElement> {
  tooltip?: TooltipProps;
  timestamp: string | JSX.Element;
  log: string | JSX.Element;
  classNames?: {
    wrapper?: string;
    timestamp?: string;
    log?: string;
  };
}

export function TerminalLog(props: TerminalLogProps) {
  return (
    <tr className={"animate-log w-full hover:bg-neutral-800"}>
      <Tooltip content="0ms since start" placement="right" {...props.tooltip}>
        <td className="px-6 py-[0.125rem]">
          {typeof props.timestamp === "string" ? (
            props.timestamp
          ) : (
            <>({props.timestamp})</>
          )}
        </td>
      </Tooltip>
      <td className="w-full py-[0.125rem] pr-6">
        {typeof props.log === "string" ? (
          <span>{props.log}</span>
        ) : (
          <>{props.log}</>
        )}
      </td>
    </tr>
  );
}

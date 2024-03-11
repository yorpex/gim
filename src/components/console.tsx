"use client";

import { ScrollShadow } from "@nextui-org/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Terminal } from "./ui/terminal";
import { TerminalLog, type TerminalLogProps } from "./ui/terminal/log";

interface DynamicLog extends TerminalLogProps {
  id: string;
}

export function Console() {
  const [logs, setLogs] = useState<DynamicLog[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulação de logs dinâmicos
      const newLog: DynamicLog = {
        id: `l${logs.length + 1}`,
        log: "Log dinâmico",
        timestamp: dayjs(new Date()).format("HH:mm:ss.SSS"),
      };
      setLogs((prevLogs) => [...prevLogs, newLog]);
    }, 2000);

    return () => clearInterval(interval);
  }, [logs]);

  return (
    <div className="border">
      <div className="bg-accent-100 flex w-full space-x-2 px-2 pt-2">
        <div className="size-3 cursor-pointer rounded-full bg-green-500/50"></div>
        <div className="size-3 cursor-pointer rounded-full bg-yellow-500/50"></div>
        <div className="size-3 cursor-pointer rounded-full bg-red-500/50"></div>
      </div>
      <Terminal
        classNames={{
          log: "overflow-y-auto h-64 [&::-webkit-scrollbar]:hidden",
          wrapper: "w-full max-w-screen-lg rounded-lg",
        }}
        clipboard={{
          board: Array(logs.length).fill("Log dinâmico").join("\n"),
        }}
      >
        <ScrollShadow className="h-64 w-full">
          {logs.map((log) => (
            <TerminalLog
              key={log.id}
              id={log.id}
              log={log.log}
              timestamp={log.timestamp}
            />
          ))}
        </ScrollShadow>
      </Terminal>
    </div>
  );
}

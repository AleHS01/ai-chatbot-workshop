"use client";

import type { UIMessage } from "ai";

type MessageProps = {
  message: UIMessage;
};

export function Message({ message }: MessageProps) {
  const isUser = message.role === "user";
  const text = message.parts
    ?.filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");

  const userMessageStyle =
    "max-w-[min(85%,28rem)] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-primary-foreground shadow-sm";
  const assistantMessageStyle =
    "max-w-[min(85%,28rem)] rounded-2xl rounded-bl-md border border-border/60 bg-zinc-300/95 px-4 py-3 text-zinc-950 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50";

  return (
    <div className={isUser ? "flex items-start justify-end gap-1.5" : "flex items-start justify-start gap-1.5"}>
      <div className={isUser ? userMessageStyle : assistantMessageStyle}>
        <p className="whitespace-pre-wrap break-words text-[15px] leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

"use client";

import type { FormEvent } from "react";
import type { Route } from "next";

import { DefaultChatTransport, type UIMessage } from "ai";
import { type ComponentProps, useState } from "react";
import { useChat } from "@ai-sdk/react";

import { MessageThread } from "@/features/ai-chat/components/message/thread";
import { PromptBox } from "@/features/ai-chat/components/prompt/box";
import { generateUuid, cn } from "@/lib/utilities";

interface ChatProperties extends ComponentProps<"div"> {
  initialMessages: UIMessage[];
  chatId: string;
}

function Chat({
  initialMessages,
  className,
  chatId,
  ...properties
}: ChatProperties) {
  const [prompt, setPrompt] = useState("");
  const { sendMessage, messages, status } = useChat({
    transport: new DefaultChatTransport({
      // only send the last message (the user's prompt) to the server:
      prepareSendMessagesRequest({ messages, id }) {
        return {
          body: { newMessage: messages.at(-1), chatId: id },
        };
      },
      api: "/api/chat" as Route,
    }),
    messages: initialMessages,
    generateId: generateUuid,
    id: chatId,
  });

  function onPromptChange(prompt: string) {
    setPrompt(prompt);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage({ text: prompt });
    setPrompt("");
  }

  return (
    <div
      className={cn("flex h-full w-full flex-col gap-y-3", className)}
      {...properties}
    >
      <MessageThread messages={messages} className="flex-1" />
      <PromptBox
        disabled={status === "submitted" || status === "streaming"}
        onPromptChange={onPromptChange}
        onSubmit={submitHandler}
        chatStatus={status}
        className="mb-3"
        prompt={prompt}
      />
    </div>
  );
}

export { Chat };

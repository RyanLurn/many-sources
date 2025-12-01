import {
  convertToModelMessages,
  type UIMessage,
  smoothStream,
  streamText,
} from "ai";
import { NextResponse } from "next/server";

import { groq } from "@/features/ai-chat/helpers/providers/groq";
import { mockDatabase } from "@/database/mock";
import { generateUuid } from "@/lib/utilities";

interface RequestBody {
  newMessage: UIMessage;
  chatId: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    const messages = [
      ...mockDatabase.messages.filter(
        (message) => message.chatId === body.chatId
      ),
      body.newMessage,
    ];

    mockDatabase.messages.push({ ...body.newMessage, chatId: body.chatId });

    const result = streamText({
      experimental_transform: smoothStream({
        chunking: "line",
        delayInMs: 20,
      }),
      onError: (error) => {
        console.error(error);
      },
      messages: convertToModelMessages(messages),
      model: groq("llama-3.1-8b-instant"),
    });

    return result.toUIMessageStreamResponse({
      onFinish: ({ responseMessage }) => {
        mockDatabase.messages.push({ ...responseMessage, chatId: body.chatId });
      },
      generateMessageId: generateUuid,
      originalMessages: messages,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

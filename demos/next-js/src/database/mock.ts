import type { UIMessage } from "ai";

interface Message extends UIMessage {
  chatId: string;
}

interface Chat {
  title: string;
  id: string;
}

const chatTable: Chat[] = [];
const messageTable: Message[] = [];

// --- 1. Chat ID Constants ---
const CHAT_ID_1 = "chat-001"; // Standard conversation
const CHAT_ID_2 = "chat-002"; // Reasoning & Citations
const CHAT_ID_3 = "chat-003"; // File/Image upload

// --- 2. Populate Chats ---
chatTable.push(
  { title: "React State Management", id: CHAT_ID_1 },
  { title: "Physics Problem (Reasoning)", id: CHAT_ID_2 },
  { title: "UI Screenshot Analysis", id: CHAT_ID_3 }
);

// --- 3. Populate Messages ---

// === Scenario 1: Standard Conversation ===
messageTable.push(
  {
    parts: [
      {
        text: "What is the difference between Redux and Zustand?",
        type: "text",
      },
    ],
    chatId: CHAT_ID_1,
    id: "msg-1-a",
    role: "user",
  },
  {
    parts: [
      {
        text: "Redux is a robust, event-driven state management library that uses a single immutable store and reducers. Zustand is a lighter, hook-based solution that is often simpler to set up with less boilerplate.",
        state: "done",
        type: "text",
      },
    ],
    chatId: CHAT_ID_1,
    role: "assistant",
    id: "msg-1-b",
  },
  {
    parts: [{ text: "Why is the sky blue?", type: "text" }],
    chatId: CHAT_ID_2,
    id: "msg-2-a",
    role: "user",
  },
  {
    parts: [
      // This part renders the "Thinking..." block
      {
        text: "The user is asking about Rayleigh scattering. I should explain how shorter wavelengths scatter more easily.",
        type: "reasoning",
        state: "done",
      },
      // This part renders the actual answer
      {
        text: "The sky appears blue due to a phenomenon called **Rayleigh scattering**. As sunlight passes through the atmosphere, shorter wavelengths (blue/violet) are scattered more strongly by gases than longer wavelengths (red).",
        state: "done",
        type: "text",
      },
      // This part renders a source citation
      {
        url: "https://en.wikipedia.org/wiki/Rayleigh_scattering",
        title: "Wikipedia: Rayleigh scattering",
        type: "source-url",
        sourceId: "src-1",
      },
    ],
    chatId: CHAT_ID_2,
    role: "assistant",
    id: "msg-2-b",
  },
  {
    parts: [
      // Image attachment
      {
        url: "https://placedog.net/500/280", // Placeholder image
        filename: "dog_screenshot.jpg",
        mediaType: "image/jpeg",
        type: "file",
      },
      // Text accompanying the image
      { text: "Can you describe this image for me?", type: "text" },
    ],
    chatId: CHAT_ID_3,
    id: "msg-3-a",
    role: "user",
  },
  {
    parts: [
      {
        text: "This image displays an adorable dog looking directly at the camera.",
        state: "done",
        type: "text",
      },
    ],
    chatId: CHAT_ID_3,
    role: "assistant",
    id: "msg-3-b",
  }
);

const mockDatabase = {
  messages: messageTable,
  chats: chatTable,
};

export { mockDatabase };
export type { Message, Chat };

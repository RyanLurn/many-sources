import type { UIMessage } from "ai";

import { User, Bot } from "lucide-react";

import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { authClient } from "@/features/auth/client";
import { cn } from "@/lib/utilities";

interface MessageAvatarProperties extends Pick<UIMessage, "role"> {
  className?: string;
}

function MessageAvatar({ className, role }: MessageAvatarProperties) {
  const { data } = authClient.useSession();
  const fallbackIcon = role === "user" ? <User /> : <Bot />;
  const imageSource = role === "user" ? data?.user.image : undefined;

  return (
    <Avatar className={cn("size-8 ring ring-border", className)}>
      <AvatarImage src={imageSource ?? undefined} alt={`${role} avatar`} />
      <AvatarFallback>{fallbackIcon}</AvatarFallback>
    </Avatar>
  );
}

export { MessageAvatar };

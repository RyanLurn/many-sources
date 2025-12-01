import type { ComponentProps } from "react";
import type { ChatStatus } from "ai";

import { Loader2Icon, SquareIcon, SendIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utilities";

interface SendPromptButtonProperties extends ComponentProps<typeof Button> {
  chatStatus: ChatStatus;
}

function SendPromptButton({
  chatStatus,
  className,
  disabled,
  ...properties
}: SendPromptButtonProperties) {
  let Icon = <SendIcon className="size-4" />;

  switch (chatStatus) {
    case "submitted": {
      Icon = <Loader2Icon className="size-4 animate-spin" />;
      break;
    }
    case "streaming": {
      Icon = <SquareIcon className="size-4" />;
      break;
    }
    case "error": {
      Icon = <XIcon className="size-4" />;
      break;
    }
    default: {
      Icon = <SendIcon className="size-4" />;
      break;
    }
  }

  return (
    <Button
      className={cn("gap-1.5 rounded-lg", className)}
      disabled={disabled}
      type="submit"
      {...properties}
    >
      {Icon}
    </Button>
  );
}

export { SendPromptButton };

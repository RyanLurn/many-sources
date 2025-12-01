import { File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utilities";

function PromptTools({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-1",
        "[&_button:first-child]:rounded-bl-xl",
        className
      )}
    >
      <Button variant="outline" size="icon" disabled>
        <File />
      </Button>
    </div>
  );
}

export { PromptTools };

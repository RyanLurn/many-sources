import type { BaseEvent } from "@/types/events";

function captureEvent(event: BaseEvent) {
  if (!event.when) {
    event.when = new Date().toISOString();
  }
  if (!event.who) {
    event.who = "Anonymous";
  }

  if (process.env.NODE_ENV === "development") {
    const logMessage = `${event.who} causes ${event.kind} ${event.level} event in ${event.where} at ${event.when}: ${event.what}. Context:`;

    switch (event.level) {
      case "error": {
        console.error(logMessage, event.context);
        break;
      }
      case "debug": {
        console.debug(logMessage, event.context);
        break;
      }
      case "warn": {
        console.warn(logMessage, event.context);
        break;
      }
      case "info": {
        console.info(logMessage, event.context);
        break;
      }
    }
  }
}

export { captureEvent };

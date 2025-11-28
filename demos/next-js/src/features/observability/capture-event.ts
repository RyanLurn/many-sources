import type { BaseEvent } from "@/types/events";

function captureEvent(event: BaseEvent) {
  if (!event.when) {
    event.when = new Date().toISOString();
  }
  if (!event.who) {
    event.who = "Anonymous Request";
  }

  if (process.env.NODE_ENV === "development") {
    const logMessage = `[${event.kind}]: ${event.who} causes "${event.what}" in ${event.where} at ${event.when}:`;

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

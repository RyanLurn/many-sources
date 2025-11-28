import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v7 as uuidv7 } from "uuid";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function generateUuid() {
  return uuidv7();
}

export { generateUuid, cn };

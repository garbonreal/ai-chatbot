import { atom } from "recoil";
import { getFormattedTime } from "../util";

// Atom for showing/hiding the chatbot
export const showNestyChatAtom = atom({
  key: "showNestyChatAtom",
  default: "min", // either close, min, or max
});

// Atom to store the history of messages
export const nestyChatMessageHistoryAtom = atom({
  key: "nestyChatMessageHistoryAtom",
  default: [
    {
      sender: "Nesty",
      message: "Hello! How can I assist you today?",
      time: getFormattedTime(new Date()),
    },
  ],
});

// Atom to track if the user is typing
export const isNestyChatThinkingAtom = atom({
  key: "isNestyChatThinkingAtom",
  default: false,
});

// Atom for storing any chatbot errors
export const nestyChatErrorAtom = atom({
  key: "nestyChatErrorAtom",
  default: "",
});

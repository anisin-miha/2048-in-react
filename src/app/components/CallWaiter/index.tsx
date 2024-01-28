"use client";
import { sendMessageToTelegram } from "../../functions/callWaiter";
import { Button } from "../Button";

const RuthraChatId = "6306657303";
const DocChatId = "1251976905";
const MychatId = "197267909";

export default function CallWaiter() {
  return (
    <Button
      onClick={() => {
        sendMessageToTelegram("hi", RuthraChatId);
        sendMessageToTelegram("hi", DocChatId);
        sendMessageToTelegram("hi", MychatId);
      }}
    >
      call waiter
    </Button>
  );
}

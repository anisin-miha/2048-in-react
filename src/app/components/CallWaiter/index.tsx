"use client";
import { sendMessageToTelegram } from "../../functions/callWaiter";
import { Button } from "../Button";

export default function CallWaiter() {
  return (
    <Button
      onClick={() => {
        sendMessageToTelegram("hi");
      }}
    >
      call waiter
    </Button>
  );
}

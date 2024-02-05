"use client";
import { useSearchParams } from "next/navigation";
import { sendMessageToTelegram } from "../../functions/callWaiter";
import { Button } from "../Button";

const RuthraChatId = "6306657303";
const DocChatId = "1251976905";
const MychatId = "197267909";

export default function CallWaiter() {
  const searchParams = useSearchParams();

  const tableNumber = searchParams.get("table");

  const text = `table № ${tableNumber} pressed button "call waiter"`;

  const handleClick = () => {
    sendMessageToTelegram(text, RuthraChatId);
    sendMessageToTelegram(text, DocChatId);
    sendMessageToTelegram(text, MychatId);
  };

  return <Button onClick={handleClick}>call waiter</Button>;
}

const botToken = "6656960670:AAH0LNLzkuCOYEs2powEHxTH0l0c158U0_c";
const chatId = "197267909"; // me
const RuthraChatId = "6306657303";

export function sendMessageToTelegram(message: string) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${RuthraChatId}&text=${encodeURIComponent(message)}`;

  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      // Обработка ответа, если необходимо
      console.log(data);
    })
    .catch((error) => {
      console.error("Ошибка при отправке сообщения:", error);
    });
}

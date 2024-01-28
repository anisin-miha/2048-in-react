const botToken = "6656960670:AAH0LNLzkuCOYEs2powEHxTH0l0c158U0_c";

export function sendMessageToTelegram(message: string, chatId: string) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

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

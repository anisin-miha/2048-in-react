export const categories = [
  {
    name: "Hot beverages",
    link: "beverages",
  },
  {
    name: "Milk shakes",
    link: "milk-shakes",
  },
  {
    name: "Fresh juices",
    link: "fresh-juices",
  },
  {
    name: "Roll in Paratha",
    link: "roll-in-paratha",
  },
  {
    name: "Sandwich / Burger",
    link: "sandwich-burger",
  },
  {
    name: "Pancakes",
    link: "pancekes",
  },
  {
    name: "Meals",
    link: "meals",
  },
  {
    name: "Salad",
    link: "salad",
  },
  {
    name: "Lassi",
    link: "lassi",
  },
  {
    name: "Set Breakfast",
    link: "set-breakfast",
  },
  {
    name: "Choice of cereals",
    link: "choice-of-cereals",
  },
  {
    name: "Choice of eggs",
    link: "choic-of-eggs",
  },
  {
    name: "Indian breakfast",
    link: "indian-breakfast",
  },
];

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo_AhTfkPRxwK-HSRLfggXv5WEqQLydVoec9Vd4z4AuHxRR4UHnnecuB8PcyKEYp0iSnuSgaDvuY1c/pub?output=csv";

fetch(url)
  .then((response) => response.text())
  .then((data) => {
    // Обработка данных (например, преобразование CSV в объект JavaScript)
    console.log(data);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });

export function fetchData() {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      // Обработка данных (например, преобразование CSV в объект JavaScript)
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Ошибка при загрузке данных:", error);
    });
}

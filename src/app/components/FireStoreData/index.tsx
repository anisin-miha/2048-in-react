import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firestore";
import { addDoc } from "firebase/firestore";

export const fetchData = async () => {
  const collectionRef = collection(firestore, "menu"); // Замените 'your-collection' на имя вашей коллекции Firestore
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // console.log("Fetched data:", data);

  return data;
};

// Функция для добавления элемента в коллекцию
async function addItemToCollection() {
  try {
    // Указываем ссылку на коллекцию, в которую вы хотите добавить элемент
    const collectionRef = collection(firestore, "menu"); // Замените 'your-collection' на имя вашей коллекции

    // Данные, которые вы хотите добавить
    const newItemData = {
      // ... данные вашего элемента ...
    };

    // Добавление элемента в коллекцию
    const docRef = await addDoc(collectionRef, newItemData);

    console.log("Item added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding item: ", error);
  }
}

import { doc, setDoc } from "firebase/firestore";

export async function addOrUpdateItemToCollection(item: any) {
  const collectionRef = collection(firestore, "menu"); // Замените 'your-collection' на имя вашей коллекции
  const itemDocRef = doc(collectionRef); // Замените 'your-document-id' на идентификатор документа или оставьте пустым для создания нового документа

  try {
    // Используйте setDoc для установки данных в документ
    await setDoc(itemDocRef, item);

    console.log("Item added or updated successfully");
  } catch (error) {
    console.error("Error adding or updating item: ", error);
  }
}

// // Пример данных для элемента
// const singleItem = {
//   name: "Single Item",
//   description: "Description of the item",
// };

// // Вызовите функцию для добавления или обновления элемента в коллекции
// addOrUpdateItemToCollection(singleItem);

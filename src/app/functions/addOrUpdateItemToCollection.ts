import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firestore";
import { Section } from "./fetchMenu";

// Функция для добавления документа с уникальными ID и плоской структурой
async function addDocumentWithUniqueId(collectionRef: any, item: Section) {
  // Проверяем, что category и section существуют
  if (!item.categories || !item.name) {
    console.error(
      "Error: 'categories' and 'name' (section) must be provided in the 'item'.",
    );
    return;
  }

  // Получаем идентификатор секции из коллекции "sections"
  const sectionQuery = query(
    collection(firestore, "sections"),
    where("name", "==", item.name),
  );
  const sectionSnapshot = await getDocs(sectionQuery);
  const sectionId = sectionSnapshot.docs[0]?.id;

  // Создаем массив со всеми блюдами, добавляя поля sectionId и categoryId
  const flatItems = [];

  for (const category of Object.keys(item.categories)) {
    // Получаем идентификатор категории из коллекции "categories"
    const categoryQuery = query(
      collection(firestore, "categories"),
      where("name", "==", category),
    );
    const categorySnapshot = await getDocs(categoryQuery);
    const categoryId = categorySnapshot.docs[0]?.id;

    // Добавляем блюда в массив
    flatItems.push(
      ...item.categories[category].map((element) => ({
        ...element,
        section: item.name,
        sectionId,
        category,
        categoryId,
      })),
    );
  }

  // Используем addDoc для добавления документа с уникальным ID
  await Promise.all(flatItems.map((item) => addDoc(collectionRef, item)));

  console.log("Item added successfully");
}

export async function addOrUpdateItemToCollection(item: Section) {
  const collectionRef = collection(firestore, "menu");

  try {
    await addDocumentWithUniqueId(collectionRef, item);
  } catch (error) {
    console.error("Error adding or updating item: ", error);
  }
}

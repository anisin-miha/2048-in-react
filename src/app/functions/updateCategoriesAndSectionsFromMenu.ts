import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { firestore } from "../firestore";

export async function updateCategoriesAndSectionsFromMenu() {
  const menuCollectionRef = collection(firestore, "menu");

  try {
    const menuSnapshot = await getDocs(menuCollectionRef);

    const uniqueSections: Set<string> = new Set();
    const categoriesBySection: Record<string, Set<string>> = {};

    menuSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && data.section) {
        uniqueSections.add(data.section);

        if (data.category) {
          if (!categoriesBySection[data.section]) {
            categoriesBySection[data.section] = new Set();
          }
          categoriesBySection[data.section].add(data.category);
        }
      }
    });

    // Добавляем уникальные значения в коллекцию "sections"
    const sectionsCollectionRef = collection(firestore, "sections");
    const categoriesCollectionRef = collection(firestore, "categories");

    for (const section of uniqueSections) {
      const sectionDocRef = await addDoc(sectionsCollectionRef, {
        name: section,
        categories: [],
      });

      const categoryIds = categoriesBySection[section];

      if (categoryIds) {
        categoryIds.forEach(async (categoryId) => {
          const categoryDocRef = await addDoc(categoriesCollectionRef, {
            name: categoryId,
            sectionId: sectionDocRef.id,
          });

          // Обновляем поле "categories" в документе "section"
          await updateDoc(sectionDocRef, {
            categories: arrayUnion(categoryDocRef.id),
          });
        });
      }
    }

    console.log("Categories and sections updated successfully");
  } catch (error) {
    console.error("Error updating categories and sections:", error);
  }
}

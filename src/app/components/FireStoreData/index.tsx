import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firestore";

export const fetchMenu = async () => {
  const collectionRef = collection(firestore, "menu"); // Замените 'your-collection' на имя вашей коллекции Firestore
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};
export const fetchSections = async () => {
  const collectionRef = collection(firestore, "sections");
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
  }));

  return data;
};

export const fetchPage = async (id: string) => {
  const categoriesCollectionRef = collection(firestore, "menu");
  const categoriesQuery = query(
    categoriesCollectionRef,
    where("sectionId", "==", id),
  );
  const categoriesSnapshot = await getDocs(categoriesQuery);

  const data = categoriesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export const fetchCategories = async (id: string) => {
  const categoriesCollectionRef = collection(firestore, "categories");
  const categoriesQuery = query(
    categoriesCollectionRef,
    where("sectionId", "==", id),
  );
  const categoriesSnapshot = await getDocs(categoriesQuery);
  const categoriesData = categoriesSnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
  }));
  return categoriesData;
};

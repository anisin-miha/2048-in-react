import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { firestore } from "../firestore";

export async function deleteAllDocumentsInCollection(
  collectionName: string,
): Promise<void> {
  const collectionRef = collection(firestore, collectionName);

  try {
    const querySnapshot = await getDocs(collectionRef);

    // Удаляем каждый документ в коллекции
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    console.log(
      `All documents in collection ${collectionName} deleted successfully`,
    );
  } catch (error) {
    console.error(
      `Error deleting documents in collection ${collectionName}:`,
      error,
    );
  }
}

export const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo_AhTfkPRxwK-HSRLfggXv5WEqQLydVoec9Vd4z4AuHxRR4UHnnecuB8PcyKEYp0iSnuSgaDvuY1c/pub?output=csv";

export interface Dish {
  section: string;
  category: string;
  dish: string;
  dish_ru: string;
  ingredients: string;
  ingredients_ru: string;
  price: string;
  "Bottle price": string;
  "Glass price": string;
  "30ml Price": string;
  "60ml Price": string;
  "180ml Price": string;
  "Shot price": string;
}

export interface Section {
  name: string;
  categories: Record<string, Dish[]>;
}
import Papa from "papaparse";

export function csvToObject(csv: string): Section[] {
  // Используем библиотеку papaparse для парсинга CSV
  const parsedCsv = Papa.parse(csv, { header: true });

  const sections: Section[] = [];
  let currentSection: Section | null = null;
  let currentCategory: string | null = null;

  parsedCsv.data.forEach((obj: any) => {
    if (obj.section) {
      currentCategory = null;

      const existingSection = sections.find(
        (section) => section.name === obj.section,
      );

      if (existingSection) {
        currentSection = existingSection;
      } else {
        currentSection = {
          name: obj.section,
          categories: {},
        };
        sections.push(currentSection);
      }
    }

    if (obj.category) {
      currentCategory = obj.category;

      if (!currentSection!.categories[currentCategory!]) {
        currentSection!.categories[currentCategory!] = [];
      }
    }

    if (currentSection && currentCategory) {
      currentSection.categories[currentCategory].push(obj);
    }
  });

  return sections;
}

export const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo_AhTfkPRxwK-HSRLfggXv5WEqQLydVoec9Vd4z4AuHxRR4UHnnecuB8PcyKEYp0iSnuSgaDvuY1c/pub?output=csv";

export interface Dish {
  Section: string;
  Category: string;
  Dish: string;
  Ingridients: string;
  Price: string;
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

export function csvToObject(csv: string): Section[] {
  const lines: string[] = csv.split("\n");
  const headers: string[] = lines[0].split(",");

  const sections: Section[] = [];
  let currentSection: Section | null = null;
  let currentCategory: string | null = null;

  for (let i = 1; i < lines.length; i++) {
    const currentLine: string[] = lines[i].split(",");

    const obj: Dish = {} as Dish;
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim() as keyof Dish] = (currentLine[j].trim() ||
        null) as any;
    }

    if (obj.Section) {
      currentCategory = null;

      const existingSection = sections.find(
        (section) => section.name === obj.Section,
      );

      if (existingSection) {
        currentSection = existingSection;
      } else {
        currentSection = {
          name: obj.Section,
          categories: {},
        };
        sections.push(currentSection);
      }
    }

    if (obj.Category) {
      currentCategory = obj.Category;

      if (!currentSection!.categories[currentCategory!]) {
        currentSection!.categories[currentCategory!] = [];
      }
    }

    if (currentSection && currentCategory) {
      currentSection.categories[currentCategory].push(obj);
    }
  }



  return sections;
}

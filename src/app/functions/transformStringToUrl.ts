export function transformString(input: string): string {
  // Приводим к нижнему регистру, заменяем пробелы на дефисы и символ '/' на 'and'
  return input.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "and");
}

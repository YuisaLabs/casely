function toCamelCase(key: string): string {
  let result = '';
  let upperNext = false;

  for (const char of key) {
    if (char === '_' || char === '-') {
      upperNext = true;
    } else { 
      result += upperNext ? char.toUpperCase() : char;
      upperNext = false;
    }
  }

  return result;
}

function toSnakeCase(key: string): string {
  return key
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}

export { toCamelCase, toSnakeCase };
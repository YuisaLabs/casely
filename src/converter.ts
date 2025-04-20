import { ConvertOptions } from "./types";

function convertKeys<T>(
  input: unknown,
  transformer: (key: string) => string,
  options: ConvertOptions = {},
  currentDepth: number = 0
): T {
  const {
    skipKeys = [],
    depth = Infinity,
    valueTransformer,
    preserveArrayKeys,
  } = options;

  if (currentDepth >= depth) return input as T;

  if (Array.isArray(input)) {
    return input.map(item =>
      preserveArrayKeys ? item : convertKeys(item, transformer, options, currentDepth + 1)
    ) as T;
  }

  if (input && typeof input === "object" && input.constructor === Object) {
    const result: Record<string, unknown> = {};

    for (const key in input) {
      if (!Object.prototype.hasOwnProperty.call(input, key)) continue;

      const newKey = skipKeys.includes(key) ? key : transformer(key);
      const value = input[key];
      const transformedValue = convertKeys(value, transformer, options, currentDepth + 1);

      result[newKey] = valueTransformer ? valueTransformer(transformedValue) : transformedValue;
    }

    return result as T;
  }

  return valueTransformer ? valueTransformer(input) as T : input as T;
}

export { convertKeys };
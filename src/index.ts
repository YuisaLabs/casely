import { convertKeys } from "./converter";
import { ConvertOptions } from "./types";
import { toCamelCase, toSnakeCase } from "./utils";

function toCamelCaseKeys<T>(input: T, options?: ConvertOptions): T {
  return convertKeys(input, toCamelCase, options);
}

function toSnakeCaseKeys<T>(input: T, options?: ConvertOptions): T {
  return convertKeys(input, toSnakeCase, options);
}

function convertObjectKeys<T>(
  input: T,
  type: "camel" | "snake",
  options?: ConvertOptions
) : T {
  if (type === "camel") {
    return toCamelCaseKeys(input, options);
  } else if (type === "snake") {
    return toSnakeCaseKeys(input, options);
  } else {
    throw new Error("Invalid type. Use 'camel' or 'snake'.");
  }
}

export { toCamelCaseKeys, toSnakeCaseKeys, convertObjectKeys };
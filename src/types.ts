interface ConvertOptions {
  skipKeys?: string[];
  depth?: number;
  valueTransformer?: (value: unknown) => unknown;
  preserveArrayKeys?: boolean;
}

export { ConvertOptions };
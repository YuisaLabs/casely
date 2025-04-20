import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    del({ targets: ["dist/*"] }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "tsconfig.json",
    }),
  ],
};

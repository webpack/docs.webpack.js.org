import { Application } from "typedoc";
import { fileURLToPath } from "node:url";

const app = await Application.bootstrapWithPlugins({
  entryPoints: ["../webpack/lib/index.js"],
  out: "api",

  // Plugins
  plugin: [
    "typedoc-plugin-markdown",
    "typedoc-plugin-frontmatter",
    fileURLToPath(import.meta.resolve("./postprocessor.mjs")),
  ],

  // TypeScript configuration
  tsconfig: fileURLToPath(import.meta.resolve("./tsconfig.json")),
});

const project = await app.convert();

await app.generateOutputs(project);

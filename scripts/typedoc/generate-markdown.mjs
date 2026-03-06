import { Application } from "typedoc";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import docNavigation from "../../docs.json" with { type: "json" };

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define all paths relative to the current file
const navigationFile = resolve(__dirname, "./nav.generated.json");
const entryPointsPath = resolve(__dirname, "../../../webpack/types.d.ts");
const tsconfigPath = resolve(__dirname, "./tsconfig.json");
const postprocessorPath = resolve(__dirname, "./postprocessor.mjs");
const docsJsonPath = resolve(__dirname, "../../docs.json");

// const app = await Application.bootstrapWithPlugins({
//   entryPoints: [entryPointsPath],
//   out: "api",

//   // Plugins
//   plugin: [
//     "typedoc-plugin-markdown",
//     "typedoc-plugin-frontmatter",
//     postprocessorPath,
//   ],

//   // TypeScript configuration
//   tsconfig: tsconfigPath,

//   // Markdown configuration
//   entryFileName: "index",
//   hidePageHeader: true,
//   navigationJson: navigationFile,
// });

// const project = await app.convert();

// await app.generateOutputs(project);

// Update navigation
const { default: generatedNavigation } = await import(navigationFile, {
  with: { type: "json" },
});

const mapNavigation = (section) => {
  if (!section.children) {
    return `api/${section.path}`;
  }

  // If this section has only one child and that child has children,
  // collapse this section and promote the grandchildren
  if (section.children.length === 1 && section.children[0].children) {
    const singleChild = section.children[0];
    return {
      group: section.title,
      pages: singleChild.children.map(mapNavigation),
    };
  }

  // Normal case: map all children
  return {
    group: section.title,
    pages: section.children.map(mapNavigation),
  };
};

const navigationEntry = generatedNavigation.map(mapNavigation);

docNavigation.navigation.tabs.at(-1).groups = navigationEntry;

await writeFile(docsJsonPath, JSON.stringify(docNavigation, null, 2));

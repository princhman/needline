import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://api.linear.app/graphql",
  documents: ["src/**/*.graphql", "src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;

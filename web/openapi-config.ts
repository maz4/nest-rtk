import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "../server/swagger-spec.json",
  apiFile: "./src/store/api/baseApi.ts",
  apiImport: "baseApi",
  argSuffix: "Args",
  responseSuffix: "Response",
  outputFiles: {
    "./src/store/api/gen/users.gen.ts": {
      filterEndpoints: [/User/],
    },
  },
  hooks: true,
};

export default config;

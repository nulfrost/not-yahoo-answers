import { makeSchema } from "nexus";
import * as types from "./index";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";

const schema = makeSchema({
  types,
  shouldGenerateArtifacts: process.env.NODE_ENV === "development",
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: path.join(
          process.cwd(),
          "generated/typegen-nexus-plugin-prisma.d.ts"
        ),
      },
    }),
  ],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
  sourceTypes: {
    modules: [{ module: "@prisma/client", alias: "PrismaClient" }],
  },
  contextType: {
    module: path.join(process.cwd(), "schema/context.ts"),
    export: "Context",
  },
});

export default schema;

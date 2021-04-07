import { makeSchema } from "nexus";
import * as types from "./index";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";

const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
});

export default schema;

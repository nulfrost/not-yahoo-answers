import schema from "../../schema/schema";
import { context } from "schema/context";
import { ApolloServer } from "apollo-server-micro";

const server = new ApolloServer({
  schema,
  context,
  debug: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql",
});

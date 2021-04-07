import schema from "../../schema";
import { ApolloServer } from "apollo-server-micro";

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql",
});

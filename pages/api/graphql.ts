import schema from "../../schema/schema";
import { context } from "schema/context";
import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";

const cors = Cors();

const server = new ApolloServer({
  schema,
  context,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors((req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  return server.createHandler({ path: "/api/graphql" })(req, res);
});

// api/graphql.ts
import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../src/graphql"; // Adjust this path as needed
import { IncomingMessage, ServerResponse } from "http";

const server = new ApolloServer({ typeDefs, resolvers });
const startServer = server.start();

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  await startServer;
  return server.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

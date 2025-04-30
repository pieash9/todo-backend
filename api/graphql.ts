import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../src/graphql"; // adjust if needed
import { IncomingMessage, ServerResponse } from "http";

const server = new ApolloServer({ typeDefs, resolvers });
const startServer = server.start();

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  await startServer;
  return server.createHandler({
    path: "/api/graphql",
  })(req, res); // no path needed
}

export const config = {
  api: {
    bodyParser: false,
  },
};

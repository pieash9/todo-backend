import "dotenv/config";
import connectDB from "./config/db";
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./graphql";

const startServer = async () => {
  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => console.log(`Server running at ${url}`));
};

startServer();

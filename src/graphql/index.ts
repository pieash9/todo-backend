import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "./schema/user";
import { userResolvers } from "./resolvers/user.resolvers";
import { todoTypeDefs } from "./schema/todo";
import { contactTypeDefs } from "./schema/contact";
import { todoResolvers } from "./resolvers/todo.resolvers";
import { contactResolvers } from "./resolvers/contact.resolvers";

export const typeDefs = mergeTypeDefs([
  userTypeDefs,
  todoTypeDefs,
  contactTypeDefs,
]);

export const resolvers = mergeResolvers([
  userResolvers,
  todoResolvers,
  contactResolvers,
]);

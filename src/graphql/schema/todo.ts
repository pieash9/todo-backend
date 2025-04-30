import { gql } from "apollo-server-express";

export const todoTypeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    creator: User
  }

  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }
  type Mutation {
    createTodo(title: String!, creatorId: ID!): Todo
    deleteTodo(id: ID!): Todo
    toggleTodo(id: ID!): Todo
  }
`;

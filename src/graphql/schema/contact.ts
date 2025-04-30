import { gql } from "apollo-server";

export const contactTypeDefs = gql`
  type Contact {
    id: ID!
    name: String!
    email: String
    phone: String
  }

  type Query {
    contacts: [Contact]
  }

  type Mutation {
    createContact(name: String!, email: String, phone: String): Contact
  }
`;

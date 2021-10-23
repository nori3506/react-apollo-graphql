import { gql } from "apollo-server-express";

const contacts = [
  {
    id: "1",
    firstName: "Nori",
    lastName: "Nishi",
  },
  {
    id: "2",
    firstName: "Paul",
    lastName: "One",
  },
  {
    id: "3",
    firstName: "Jim",
    lastName: "Tomas",
  },
];

const typeDefs = gql`
  type Contact {
    id: String!
    firstName: String
    lastName: String
  }

  type Query {
    contacts: [Contact]
  }
`;

const resolvers = {
  Query: {
    contacts: () => contacts,
  },
};

export { typeDefs, resolvers };

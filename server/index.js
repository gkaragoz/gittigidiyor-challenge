const { ApolloServer, gql } = require("apollo-server");

const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is running in url ${url}`);
});

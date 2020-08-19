const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: String!
    title: String!
    price: String!
    currency: String!
    imageURL: String
    shipping(shippingType: ShippingType): String
  }

  enum ShippingType {
    FREE
    FREE_SAME_DAY
    NON_FREE
  }

  type Query {
    products: [Product]!
  }
`;

module.exports = typeDefs;

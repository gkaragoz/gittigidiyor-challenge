import { gql } from "@apollo/client";

export const getProductsQuery = gql`
  query GetProducts {
    products {
      id
      title
      price
      currency
      imageURL
      detailsURL
      shipping
    }
  }
`;

const products = require("./datasources/products");

module.exports = {
  Query: {
    products: () => products,
  },
  Product: {
    shipping: (product) => {
      return product.shippingType;
    },
  },
};

import React, { useState } from "react";

import styled, { theme } from "./theme";
import { ReactComponent as HeartIcon } from "./resources/heart.svg";
import ProductCard from "./components/ProductCard";

import { getProductsQuery } from "./api/queries";
import { useQuery } from "@apollo/client";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [showAllToggle, setShowAllToggle] = useState(true);

  const DisplayProductCards = () => {
    const { loading, error, data } = useQuery(getProductsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const { products } = data;

    return products.map((product) => {
      if (!showAllToggle && !favorites.includes(product.id)) {
        return null;
      }
      return (
        <ProductCard
          key={product.id}
          product={product}
          hasFavorited={favorites.includes(product.id)}
          onFavoriteClicked={onFavoriteClicked}
        />
      );
    });
  };

  const onFavoriteClicked = (id, e) => {
    e.stopPropagation();

    if (favorites.includes(id) === false) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter((already) => already !== id));
    }
  };

  return (
    <Container>
      <Head>
        <LikedState>
          <HeartIcon />
          <h1>{favorites.length} ürün</h1>
        </LikedState>
        <LikedList onClick={() => setShowAllToggle(!showAllToggle)}>
          <h1>Beğendiklerim</h1>
        </LikedList>
      </Head>
      <Content>
        <h1>İlginizi Çekebilecek Ürünler</h1>
        <Products>{DisplayProductCards()}</Products>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1300px;
  padding: 64px 10px;
  margin: 0 auto;

  @media screen and (max-width: 710px) {
    min-width: 400px;
  }
`;

const Head = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LikedState = styled.div`
  display: flex;
  background-color: ${theme.white};
  width: 200px;
  height: 75px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 26px;
    font-weight: bold;
  }

  svg {
    margin-right: 15px;
    width: 48px;
    height: 48px;
    fill: ${theme.red};
  }
`;

const LikedList = styled.a`
  display: flex;
  background-color: ${theme.white};
  width: 200px;
  height: 75px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    background-color: ${theme.secondaryColor};
  }

  h1 {
    font-size: 26px;
    font-weight: bold;
  }
`;

const Content = styled.div`
  padding: 25px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);

  h1 {
    margin-left: 12px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;

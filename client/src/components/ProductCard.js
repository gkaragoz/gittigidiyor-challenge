import React, { useState } from "react";

import styled, { theme } from "../theme";
import { ReactComponent as ShippingIcon } from "../resources/shipping.svg";
import { ReactComponent as HeartOutlinedIcon } from "../resources/heart_outlined.svg";
import { ReactComponent as HeartIcon } from "../resources/heart.svg";

function ProductCard({ product, onFavoriteClicked, hasFavorited }) {
  const [isShown, setIsShown] = useState(false);
  const {
    id,
    imageURL,
    detailsURL,
    price,
    currency,
    shipping,
    title,
  } = product;

  const onClick = (e) => {};

  const getShippingDetails = () => {
    let icon;
    let status;

    if (shipping === "FREE_SAME_DAY") {
      icon = <ShippingIcon />;
      status = "Ücretsiz - Aynı Gün Kargo";
    }
    if (shipping === "FREE") {
      icon = <ShippingIcon />;
      status = "Ücretsiz Kargo";
    }
    if (shipping === "NON_FREE") {
      status = "Ücretli Kargo";
    }

    return (
      <Shipping>
        {icon && <ShippingIcon />}
        <p>{status}</p>
      </Shipping>
    );
  };

  return (
    <Container>
      <FavoriteButton
        onClick={(e) => onFavoriteClicked(id, e)}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        isShown={isShown}
        hasFavorited={hasFavorited}
      >
        {hasFavorited ? (
          <HeartIcon />
        ) : isShown ? (
          <HeartIcon />
        ) : (
          <HeartOutlinedIcon />
        )}
      </FavoriteButton>
      <a href={detailsURL} target="_blank" rel="noopener noreferrer">
        <Content onClick={onClick}>
          <img src={imageURL} alt={title} />
          <h2>{title}</h2>
          <PriceBox>
            {price} {currency}
          </PriceBox>
          {getShippingDetails()}
        </Content>
      </a>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1%;
  width: 22%;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    text-decoration: none;
    color: ${theme.darkGray};
  }
`;

const Content = styled.div`
  border-radius: 5px;
  border: 2px solid ${theme.secondaryColor};
  padding: 20px 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);

  img {
    align-self: center;
    object-fit: contain;
    width: 100%;
    height: 250px;
  }

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    color: ${theme.darkGray};
    padding: 0px 10px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const FavoriteButton = styled.button`
  display: flex;
  position: absolute;
  border-radius: 50%;
  border: 0;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
  outline: none;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    svg {
      fill: ${(props) => (props.isShown ? theme.red : theme.darkGray)};
    }
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => (props.hasFavorited ? theme.red : theme.darkGray)};
  }
`;

const PriceBox = styled.div`
  background-color: ${theme.primaryColor};
  margin: 8px 0px;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
`;

const Shipping = styled.div`
  display: flex;
  padding: 5px 15px;

  svg {
    width: 15px;
    fill: ${theme.green};
    margin-right: 5px;
  }

  p {
    font-size: 12px;
    font-weight: 600;
    color: ${theme.darkGray};
  }
`;

export default ProductCard;

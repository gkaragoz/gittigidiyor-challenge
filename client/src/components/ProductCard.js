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
        <Content>
          <img src={imageURL} alt={title} />
          <h2>{title}</h2>
          <PriceBox>
            <h3>
              {price} <span>{currency}</span>
            </h3>
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
  margin: 1% 1%;
  max-width: 23%;
  flex: 23%;
  transition: all 0.3s;

  /* go from four columns to three columns */
  @media screen and (max-width: ${theme.mediaQueries.wideScreen}) {
    max-width: 31%;
    flex: 31%;
  }

  /*go from three columns to two columns */
  @media screen and (max-width: ${theme.mediaQueries.tabletScreen}) {
    max-width: 48%;
    flex: 48%;
  }

  /* go from two columns to one column */
  @media screen and (max-width: ${theme.mediaQueries.phoneScreen}) {
    max-width: 98%;
    flex: 98%;
  }

  &:hover {
    transform: translateY(-5px);
  }

  a {
    text-decoration: none;
    color: ${theme.colors.darkGray};
  }
`;

const Content = styled.div`
  border-radius: 0.5rem;
  border: 0.2rem solid ${theme.colors.secondaryColor};
  padding: 2rem 1rem;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);

  img {
    align-self: center;
    object-fit: contain;
    width: 100%;
    height: 25rem;
  }

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    color: ${theme.colors.darkGray};
    padding: 0 1rem;
    font-size: ${theme.fontSizes.medium};
    font-weight: 600;
  }
`;

const FavoriteButton = styled.button`
  display: flex;
  position: absolute;
  border-radius: 50%;
  border: 0;
  width: 3rem;
  height: 3rem;
  top: 1rem;
  right: 1rem;
  justify-content: center;
  align-items: center;
  outline: none;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    svg {
      fill: ${(props) =>
        props.isShown ? theme.colors.red : theme.colors.darkGray};
    }
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    fill: ${(props) =>
      props.hasFavorited ? theme.colors.red : theme.colors.darkGray};
  }
`;

const PriceBox = styled.div`
  background-color: ${theme.colors.primaryColor};
  margin: 0.8rem 0;
  padding: 0.5rem 1.5rem;
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  border-radius: 0.5rem;
  word-wrap: break-word;

  h3,
  span {
    font-size: ${theme.fontSizes.large};
  }
`;

const Shipping = styled.div`
  display: flex;
  padding: 0.5rem 1.5rem;

  svg {
    width: 1.5rem;
    fill: ${theme.colors.green};
    margin-right: 0.5rem;
  }

  p {
    font-size: ${theme.fontSizes.small};
    font-weight: 600;
    color: ${theme.colors.darkGray};
  }
`;

export default ProductCard;

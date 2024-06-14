import React from 'react';
import styled from 'styled-components';

const CartItem = ({imageUrl, title, productPrice}) => {
  return (
    <CartDiv>
      <ProductImage src={imageUrl} alt="product" />

      <ProductDetails>
        <h2>{title}</h2>
        <h2>${productPrice}</h2>
      </ProductDetails>
    </CartDiv>
  )
}

const CartDiv = styled.div `
  display: flex;
  /* width: 100%; */
  height: 200px;
  border: 1px solid black;
`;

const ProductImage = styled.img `
  height: 160px;
`;

const ProductDetails = styled.div `
  h2 {
    font-size: 22px;
    font-weight: 500;
  }
`

export default CartItem

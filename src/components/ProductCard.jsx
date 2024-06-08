import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ProductCard({ productImage, productTitle, productPrice, productDescription }) {
    const navigate = useNavigate();
    const data = { productTitle: productTitle, productPrice: productPrice, productDescription: productDescription, productImage: productImage }

    const navigatePage = () => {
        navigate(`/products/${productPrice}`, {state: data})
    }   

    return (
        <ProductContainer onClick={navigatePage}>
            <ProductImage src={productImage} alt="picture" />
            <h4>{productTitle}</h4>
            <h3>${productPrice}</h3>
            {/* <h3>{productDescription}</h3> */}
            <CartButton>Add To Cart</CartButton>
            <BuyButton>Buy Now</BuyButton>
        </ProductContainer>
    )
}

const ProductContainer = styled.div `
    display: flex;
    cursor: pointer;
    flex-direction: column;
    max-height: min-content;
    min-height: min-content;
    max-width: 250px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    padding: 10px;

    h4 {
        font-weight: 500;
    }

    h3 {
        font-weight: 500;
    }
`;

const ProductImage = styled.img `
    border-radius: 20px ;
`;

const CartButton = styled.button `
    height: 40px;
    outline: none;
    border: none ;
    background-color: black;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 16px;

`;

const BuyButton = styled.button `
    height: 40px;
    outline: none;
    border: 1px solid black;
    background-color: white;
    color: black;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
`;

export default ProductCard
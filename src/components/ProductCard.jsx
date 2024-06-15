import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

function ProductCard({ productImage, productTitle, productPrice, productDescription }) {
    const navigate = useNavigate();
    const data = {productTitle: productTitle, productPrice: productPrice, productDescription: productDescription, productImage: productImage }

    const navigatePage = () => {
        navigate(`/products/${productPrice}`, {state: data})
    }   

    const addProduct = async () => {
        await axios.post("http://localhost:9000/api/addCart", {productTitle: productTitle, productImageURL: productImage, productPrice: productPrice.toString()});
        
    }
    
    return (
        <ProductContainer>
            <ProductImage src={productImage} alt="picture"  onClick={navigatePage} />
            <h4  onClick={navigatePage}>{productTitle}</h4>
            <h3>${productPrice}</h3>
            <CartButton onClick={addProduct}>Add To Cart</CartButton>
            <BuyButton onClick={navigatePage}>Buy Now</BuyButton>
        </ProductContainer>
    )
}

const ProductContainer = styled.div `
    display: flex;
    flex-direction: column;
    max-height: min-content;
    min-height: min-content;
    max-width: 250px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    padding: 10px;

    h4 {
        font-weight: 500;
        cursor: pointer;
    }

    h3 {
        cursor: pointer;
        font-weight: 500;
    }
`;

const ProductImage = styled.img `
    border-radius: 20px ;
    cursor: pointer;
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